import React from 'react'
import {
  StyledButton,
  StyledInput,
  StyledForm
} from './formStyles'


const Login = () => {
  return (
    <StyledForm>
      <h1>ავტორიზაცია</h1>
      <StyledInput placeholder='სახელი' />
      <StyledInput placeholder='პაროლი' />
      <StyledButton>შესვლა</StyledButton>
    </StyledForm>
  )
}

export default Login