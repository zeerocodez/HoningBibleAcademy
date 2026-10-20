'use client';

import { useState, useEffect, Suspense } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { APPLICATION_FORM_URL } from '@/lib/constants';
import { isAdminEmail } from '@/lib/auth-helpers';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegistered = searchParams.get('registered') === 'true';
  const urlError = searchParams.get('error');
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const getErrorMessage = (code: string | null) => {
    if (!code) return '';
    switch (code) {
      case 'OAuthSignin':
      case 'OAuthCallback':
      case 'Callback':
        return 'Could not authenticate with Google. If you are using Google Sign-In, please sign in below with your email and password, or verify that the Google OAuth credentials match the domain.';
      case 'OAuthAccountNotLinked':
        return 'An account already exists with this email address using a different sign-in method. Please enter your email and password below.';
      case 'OAuthCreateAccount':
        return 'Could not automatically create your account via Google. Please enter your email and password below to sign in or enroll.';
      case 'AccessDenied':
        return 'Access was denied. Please ensure you have permission or try signing in with your email and password.';
      case 'Configuration':
        return 'There is a server configuration issue with authentication. Please try signing in with email/password or contact support.';
      case 'CredentialsSignin':
        return 'Invalid email or password. Please check your credentials and try again.';
      default:
        return `Authentication failed (${code}). Please try again or sign in with your email and password below.`;
    }
  };

  const displayedError = error || getErrorMessage(urlError);

  // If already authenticated, redirect to appropriate dashboard
  useEffect(() => {
    if (status === 'authenticated') {
      const isAdmin = session?.user?.role === 'ADMIN' || isAdminEmail(session?.user?.email);
      if (isAdmin) {
        router.push('/admin');
      } else {
        router.push('/learning');
      }
    }
  }, [status, session, router]);

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);
    signIn('google', { callbackUrl: '/login-success' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const emailStr = typeof email === 'string' ? email.trim() : '';

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (res?.error) {
        setError('Invalid email or password');
      } else {
        let isAdmin = isAdminEmail(emailStr);
        if (!isAdmin) {
          try {
            const sessionRes = await fetch('/api/auth/session', { cache: 'no-store' });
            const sessionData = await sessionRes.json();
            isAdmin = sessionData?.user?.role === 'ADMIN' || isAdminEmail(sessionData?.user?.email);
          } catch (e) {
            // fallback
          }
        }

        if (isAdmin) {
          router.push('/admin');
        } else {
          router.push('/learning');
        }
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container section">
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1 className="text-center">Log In</h1>
          <p className={`text-center ${styles.subtitle}`}>
            Welcome back to Honing Bible Academy.
          </p>

          {isRegistered && (
            <div style={{
              backgroundColor: '#dcfce7',
              border: '1px solid #86efac',
              color: '#166534',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              marginBottom: '1.25rem',
              fontSize: '0.92rem',
              lineHeight: '1.4'
            }}>
              <strong>✓ Enrolment Complete!</strong> Your student account is active. Please enter your email and password to access your dashboard.
            </div>
          )}

          {displayedError && (
            <div style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#991b1b',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              marginBottom: '1.25rem',
              fontSize: '0.92rem',
              lineHeight: '1.4'
            }}>
              {displayedError}
            </div>
          )}

          <button 
            type="button" 
            className={`button button-secondary`} 
            disabled={googleLoading}
            style={{ width: '100%', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
            onClick={handleGoogleSignIn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {googleLoading ? 'Connecting to Google...' : 'Sign in with Google'}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
            <span style={{ padding: '0 1rem', color: '#64748b', fontSize: '0.875rem' }}>or continue with email</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
          </div>

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

          <div className={styles.footer} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p>Don't have an account? <Link href="/enroll" className={styles.signUpLink}>Enroll now</Link></p>
            <p>New applicant? <a href={APPLICATION_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.signUpLink}>Apply for admission ↗</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="container section text-center"><p>Loading login page...</p></div>}>
      <LoginContent />
    </Suspense>
  );
}
