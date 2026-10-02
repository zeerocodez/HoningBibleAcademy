import Header from '@/components/Header';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            <h1 className="text-center">Log In</h1>
            <p className={`text-center ${styles.subtitle}`}>
              Welcome back to Honing Bible Academy.
            </p>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <div className={styles.passwordHeader}>
                  <label htmlFor="password">Password</label>
                  <a href="#" className={styles.forgotLink}>Forgot password?</a>
                </div>
                <input type="password" id="password" name="password" required />
              </div>

              <Link href="/learn" className={`button button-primary ${styles.submitButton}`}>
                Sign In
              </Link>
            </form>

            <div className={styles.footer}>
              <p>Don't have an account? <Link href="/enroll" className={styles.signUpLink}>Enroll now</Link></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
