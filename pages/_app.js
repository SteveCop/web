import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import Footer from "../components/Footers/Footer.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Navbar /> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
    </>

  )
}

export default MyApp
