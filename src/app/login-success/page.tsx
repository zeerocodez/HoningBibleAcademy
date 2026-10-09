'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function LoginSuccess() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (session?.user?.role === 'ADMIN') {
      router.push('/admin');
    } else {
      router.push('/learning');
    }
  }, [session, status, router]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <p>Redirecting you to your dashboard...</p>
    </div>
  );
}
