import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Liquid Barrier</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/liquid.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Sarabun&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/fd7a666cec.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
