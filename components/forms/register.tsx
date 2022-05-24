import React from 'react'
import {
  StyledButton,
  StyledInput,
  StyledForm
} from './formStyles'

const Login = () => {
  return (
    <StyledForm>
      <h1>რეგისტრაცია</h1>
      <StyledInput placeholder='სახელი' />
      <StyledInput placeholder='გვარი' />
      <StyledInput placeholder='პაროლი' />
      <StyledInput placeholder='გაიმეორეთ პაროლი' />
      <StyledButton>რეგისტრაცია</StyledButton>
    </StyledForm>
  )
}

export default Login