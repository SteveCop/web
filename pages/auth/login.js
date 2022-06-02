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
        <div className="text-sm font-medium">
            Not registered? <Link href="/auth/register" ><a className="text-blue-700 hover:underline dark:text-blue-500">Create account</a></Link>
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
