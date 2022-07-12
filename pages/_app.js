import '../styles/globals.css'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import Footer from "../components/Footers/Footer.js"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>

      <Head>
        <title>Blog</title>
        <link rel="icon" href="/images/icon/favicon.ico" />
      </Head>
      {router?.route === '/dashboard' ? null :
        <Navbar />}
      <Component {...pageProps} />
      {router?.route === '/dashboard' ? null :
        <Footer />}
    </>

  )
}

export default MyApp
