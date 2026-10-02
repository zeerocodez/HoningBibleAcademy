import Header from '@/components/Header';
import styles from './page.module.css';
import Link from 'next/link';

export default function AccountPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <div className={styles.accountContainer}>
          <div className={styles.header}>
            <h1>Account Settings</h1>
            <Link href="/learn" className={styles.dashboardLink}>Go to Dashboard</Link>
          </div>

          <div className={styles.grid}>
            <div className={styles.section}>
              <h2>Profile Information</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" defaultValue="Student Name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" defaultValue="student@example.com" />
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
                <div className={styles.enrollmentItem}>
                  <h3>The Biblical Narrative</h3>
                  <span className={styles.statusActive}>Active</span>
                </div>
                <p className={styles.enrollmentDate}>Enrolled on [Date]</p>
                <div className={styles.billingActions}>
                  <button className={styles.linkButton}>View Receipt</button>
                  <button className={styles.linkButtonDanger}>Cancel Enrollment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
