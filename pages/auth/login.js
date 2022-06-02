import { LoginForm } from '../../components/Login'
import { Navbar } from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'


export default function Login() {
  return (
    <>
      <Navbar />
      <main className={styles.main2}>
      <LoginForm />
        <div class="text-sm font-medium">
            Not registered? <a href="/auth/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
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
