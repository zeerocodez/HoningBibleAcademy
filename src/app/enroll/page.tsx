'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function EnrollPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (res.ok) {
        // Redirect to login after successful registration
        router.push('/login?registered=true');
      } else {
        const text = await res.text();
        setError(text || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="container section">
        <div className={styles.enrollContainer}>
          <h1 className="text-center">Enroll in Honing Bible Academy</h1>
          <p className={`text-center ${styles.subtitle}`}>
            Join our community and begin your journey to a deeper understanding of Scripture.
          </p>

          <div className={styles.layout}>
            {/* Enrollment Form */}
            <div className={styles.formSection}>
              <h2>Your Details</h2>
              {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

              <button 
                type="button" 
                className={`button button-secondary`} 
                style={{ width: '100%', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                onClick={() => import('next-auth/react').then(mod => mod.signIn('google'))}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </button>

              <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                <span style={{ padding: '0 1rem', color: '#64748b', fontSize: '0.875rem' }}>or sign up with email</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="password">Create a Password</label>
                  <input type="password" id="password" name="password" required minLength={8} />
                  <span className={styles.helpText}>Minimum 8 characters.</span>
                </div>

                <div className={styles.paymentNotice}>
                  <p>
                    <em>Registration is free during the beta phase.</em>
                  </p>
                </div>

                <button type="submit" disabled={loading} className={`button button-primary ${styles.submitButton}`}>
                  {loading ? 'Processing...' : 'Complete Enrollment'}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className={styles.summarySection}>
              <div className={styles.summaryCard}>
                <h2>Order Summary</h2>
                <div className={styles.summaryItem}>
                  <span>Certificate in Biblical Studies</span>
                  <span>₦75,000 / $50</span>
                </div>
                <div className={styles.summaryTotal}>
                  <span>Total</span>
                  <span>₦75,000 / $50</span>
                </div>
                <ul className={styles.includesList}>
                  <li>✓ Lifetime access to course materials</li>
                  <li>✓ Private learning journal</li>
                  <li>✓ Progress tracking</li>
                  <li>✓ Downloadable resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
