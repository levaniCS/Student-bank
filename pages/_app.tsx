import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import Head from "next/head";
import type { AppProps } from 'next/app'
import AuthProvider from '../context/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component { ...pageProps } />
   </AuthProvider>
  )
}

export default MyApp
