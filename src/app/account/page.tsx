import Header from '@/components/Header';
import styles from './page.module.css';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { isAdminEmail } from '@/lib/auth-helpers';
import { courses } from '@/lib/courses';

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

  const isAdmin = user.role === 'ADMIN' || isAdminEmail(user.email);

  return (
    <>
      <Header />
      <main className="container section">
        <div className={styles.accountContainer}>
          <div className={styles.header}>
            <h1>Account Settings</h1>
            <Link href={isAdmin ? "/admin" : "/learning"} className={styles.dashboardLink}>
              Go to {isAdmin ? 'Admin Portal' : 'Dashboard'}
            </Link>
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
                  <div>
                    <p style={{ marginBottom: '1rem', color: '#64748b' }}>You are not enrolled in any courses yet.</p>
                    <Link href="/enroll" className="button button-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.875rem' }}>
                      Enroll Now
                    </Link>
                  </div>
                ) : (
                  user.enrollments.map(enrollment => {
                    const matchedCourse = courses.find(c => c.slug === enrollment.courseId);
                    const courseTitle = matchedCourse 
                      ? matchedCourse.title.replace(/^\d+\.\s*/, '') 
                      : enrollment.courseId.replace(/-/g, ' ');

                    return (
                      <div key={enrollment.id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                        <div className={styles.enrollmentItem}>
                          <h3 style={{ textTransform: 'capitalize' }}>{courseTitle}</h3>
                          <span className={enrollment.status === 'ACTIVE' ? styles.statusActive : (enrollment.status === 'PENDING' ? styles.statusPending : styles.statusInactive)} style={{ 
                            padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold',
                            backgroundColor: enrollment.status === 'ACTIVE' ? '#dcfce7' : (enrollment.status === 'PENDING' ? '#fef08a' : '#f1f5f9'),
                            color: enrollment.status === 'ACTIVE' ? '#166534' : (enrollment.status === 'PENDING' ? '#854d0e' : '#475569')
                          }}>
                            {enrollment.status}
                          </span>
                        </div>
                        <p className={styles.enrollmentDate}>Enrolled on {new Date(enrollment.createdAt).toLocaleDateString()}</p>
                        <div className={styles.billingActions} style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                          <Link href={`/learn/courses/${enrollment.courseId}`} className="button button-primary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem', textDecoration: 'none' }}>
                            Access Course →
                          </Link>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
