import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <h1> Student Bank </h1>
      <Link href={'/auth'}>Get started</Link>
    </div>
  )
}

export default Home
