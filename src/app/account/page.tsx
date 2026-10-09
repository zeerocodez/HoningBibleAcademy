import Header from '@/components/Header';
import styles from './page.module.css';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function AccountPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect('/login');
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { enrollments: true }
  });

  if (!user) {
    redirect('/login');
  }

  return (
    <>
      <Header />
      <main className="container section">
        <div className={styles.accountContainer}>
          <div className={styles.header}>
            <h1>Account Settings</h1>
            <Link href="/learning" className={styles.dashboardLink}>Go to Dashboard</Link>
          </div>

          <div className={styles.grid}>
            <div className={styles.section}>
              <h2>Profile Information</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" defaultValue={user.name || ''} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" defaultValue={user.email || ''} disabled style={{ backgroundColor: '#f1f5f9' }} />
                </div>
                <button type="button" className="button button-primary">Update Profile</button>
              </form>
            </div>

            <div className={styles.section}>
              <h2>Password</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="current_password">Current Password</label>
                  <input type="password" id="current_password" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="new_password">New Password</label>
                  <input type="password" id="new_password" />
                </div>
                <button type="button" className="button button-secondary">Change Password</button>
              </form>
            </div>
            
            <div className={styles.section}>
              <h2>Enrollment & Billing</h2>
              <div className={styles.billingCard}>
                {user.enrollments.length === 0 ? (
                  <p>You are not enrolled in any courses yet.</p>
                ) : (
                  user.enrollments.map(enrollment => (
                    <div key={enrollment.id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                      <div className={styles.enrollmentItem}>
                        <h3 style={{ textTransform: 'capitalize' }}>{enrollment.courseId.replace(/-/g, ' ')}</h3>
                        <span className={enrollment.status === 'ACTIVE' ? styles.statusActive : (enrollment.status === 'PENDING' ? styles.statusPending : styles.statusInactive)} style={{ 
                          padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold',
                          backgroundColor: enrollment.status === 'ACTIVE' ? '#dcfce7' : (enrollment.status === 'PENDING' ? '#fef08a' : '#f1f5f9'),
                          color: enrollment.status === 'ACTIVE' ? '#166534' : (enrollment.status === 'PENDING' ? '#854d0e' : '#475569')
                        }}>
                          {enrollment.status}
                        </span>
                      </div>
                      <p className={styles.enrollmentDate}>Enrolled on {new Date(enrollment.createdAt).toLocaleDateString()}</p>
                      <div className={styles.billingActions} style={{ marginTop: '0.5rem' }}>
                        <button className={styles.linkButton}>View Details</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
