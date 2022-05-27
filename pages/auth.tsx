import React, { useState, useContext } from 'react'
import styled, {  } from 'styled-components'
import Login from '../components/forms/login'
import Register from '../components/forms/register'
import { AuthContext } from '../context/authContext';
import { AuthDataProps } from '../utils/form.interfaces';


const AuthPage = () => {
  const { status, user } = useContext<AuthDataProps>(AuthContext);
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Container>
      <StyledRightContainer>
        {isLogin ? <Login status={status} user={user} /> : <Register status={status} user={user} />}
        <StyledLinkText onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'არ ხართ დარეგისტრირებული? გაიარეთ რეგისტრაცია აქიდან' : 'დაბრუნდით ავტორიზაციის გვერდზე'}
        </StyledLinkText>
      </StyledRightContainer>
      <StyledHalfImage />
    </Container>
  )
}


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledRightContainer = styled.div`
  height: 100%;
  background-image: linear-gradient(to right, #f0cf65 0%, #fff 60%);
  align-content: center;
  display: grid;
`

const StyledHalfImage = styled.div`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to top, #3689bd 0%, rgba(175, 120, 17, 0.5) 50%, rgba(18, 61, 87, 0.5) 100%), url('/images/sign-in.png');
  background-size: contain;
  box-shadow: 0 1rem 2rem rgba(#000, 0.2);
`

const StyledLinkText = styled.div`
    margin: 20px;
    font-size: 18px;
    color: #000000bf;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #545454bf;
    }
`

export default AuthPage