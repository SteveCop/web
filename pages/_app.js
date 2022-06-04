import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import Footer from "../components/Footers/Footer.js"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
    {router?.route === '/dashboard'? null :
    <Navbar />}
    <Component {...pageProps} />
    {router?.route === '/dashboard' ? null :
    <Footer />}
    </>

  )
}

export default MyApp
