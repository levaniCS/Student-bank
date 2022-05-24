import React, { useState } from 'react'
import Styles from 'styled-components'
import Login from '../components/forms/login'
import Register from '../components/forms/register'

const StartupPage = () => {
  const [isLogin, setIsLogin] = useState(true)



  return (
    <Container>
      <div>
        {isLogin ? <Login /> : <Register />}
        <div
          style={{ 
            margin: 20,
            color: 'blue',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'არ ხართ დარეგისტრირებული? გაიარეთ რეგისტრაცია აქიდან' : 'დაბრუნდით ავტორიზაციის გვერდზე'}
        </div>
      </div>
      <img src="https://thumbs.dreamstime.com/b/two-pineapple-half-summer-banner-yellow-background-creative-flat-lay-poster-slised-sunshine-monochrome-minimal-tropical-beach-184923889.jpg" alt="student-bank-cover" />
    </Container>
  )
}


const Container = Styles.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    height: 100vh;
    width: 100%;
  }
`

export default StartupPage