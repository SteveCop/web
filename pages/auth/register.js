import { RegisterForm } from "../../components/Register";
import { Navbar } from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Navbar />
      <main className={styles.main2}>
       
      <RegisterForm />
        <div class="text-sm font-medium">
          Registered Before? <a href="/auth/login" class="text-blue-700 hover:underline dark:text-blue-500">Signin Now!</a>
        </div>
      </main>
      
      <footer className={styles.footer}>
          &copy;&nbsp;<span>
             {new Date().getFullYear()}
          </span>
      </footer>
    </>
  );
}
