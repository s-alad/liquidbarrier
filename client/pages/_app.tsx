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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-default.min.css" integrity="sha512-jHurNV8IL4Q4DRHzlRaIboSWZqnA3KU6KTiRQrtU+jxE1MHxdiveHrztuHhyna6PWTE427SxNDDUqjaruirB2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js" integrity="sha512-51WDTV7haD9BBDc8RWH2r5TnuSiRyAqEnbGyuKHYn+qpYCrCckxFeqlr1I5UoOULijyLV2vnHO9LS4MrAzHxwQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://kit.fontawesome.com/fd7a666cec.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
