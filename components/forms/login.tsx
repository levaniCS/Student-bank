import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router';
import {
  StyledButton,
  StyledInput,
  StyledForm,
  StyledErrorMessage
} from './formStyles'
import { useForm, validateInput } from '../../utils/useForm'

interface LoginData {
  name: String;
  password: String;
}


const Login = () => {
  const router = useRouter()
  const initialState: LoginData = { name: '', password: '' };
  const [values, setValues] = useForm(initialState);
  const [errors, setErrors] = useState<Partial<LoginData>>({})

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setErrors({})
    e.preventDefault();
    const errors: any = validateInput(values)

    if(Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }
  
    router.push('/dashboard')
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>ავტორიზაცია</h1>
      <StyledInput placeholder='სახელი'  type={'text'} name='name' value={values.name} onChange={setValues} />
      {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
      <StyledInput placeholder='პაროლი' type={'password'} name='password' value={values.password} onChange={setValues}/>
      {errors.password && <StyledErrorMessage>{errors.password}</StyledErrorMessage>}
      <StyledButton>შესვლა</StyledButton>
    </StyledForm>
  )
}

export default Login