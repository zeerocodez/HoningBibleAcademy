'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (res?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/learn');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="container section">
        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            <h1 className="text-center">Log In</h1>
            <p className={`text-center ${styles.subtitle}`}>
              Welcome back to Honing Bible Academy.
            </p>

            {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}

            <form className={styles.form} onSubmit={handleSubmit}>
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

              <button type="submit" disabled={loading} className={`button button-primary ${styles.submitButton}`}>
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
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
