'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
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
      <Header />
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
