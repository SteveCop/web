import { RegisterForm } from "../../components/Register"
import { Navbar } from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import Footer from "../../components/Footers/Footer.js"

export default function Register() {
  return (
    <>
      <Navbar />
      <main className={styles.main2}>
       
      <RegisterForm />
        <div className="text-sm font-medium">
          Registered Before? <Link href="/auth/login"><a  className="text-blue-700 hover:underline dark:text-blue-500">Signin Now!</a></Link>
        </div>
      </main>
      
      <Footer />
      </>
  );
}
