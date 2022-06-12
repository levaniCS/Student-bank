import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router';
import {
  StyledButton,
  StyledInput,
  StyledForm,
  StyledErrorMessage
} from './formStyles'
import { useForm, validateInput } from '../../utils/useForm'
import { AuthDataProps, LoginDataProps } from '../../utils/form.interfaces';



const Login = (props: AuthDataProps) => {
  const router = useRouter()
  const initialState: LoginDataProps = { name: '', password: '' };
  const [values, setValues] = useForm(initialState);
  const [errors, setErrors] = useState<Partial<LoginDataProps>>({})

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setErrors({})
    e.preventDefault();
    const errors: any = validateInput(values)

    if(Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }
  
    props.status.login(values)
    router.push('/dashboard/main')
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