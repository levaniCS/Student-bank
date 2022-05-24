import React, { useState } from 'react'
import Styles from 'styled-components'

const StartupPage = () => {
  const [isLogin, setIsLogin] = useState(true)



  return (
    <Container>StartupPage</Container>

    // {isLogin ? <Login /> : <Register />}
  )
}


const Container = Styles.div`
  background-color:red;
`

export default StartupPage