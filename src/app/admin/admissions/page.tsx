import { prisma } from '@/lib/prisma';
import styles from '../page.module.css';
import { approveAdmission } from '../actions';

export default async function AdminAdmissions() {
  const enrollments = await prisma.enrollment.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true }
  });

  return (
    <div>
      <h1 className={styles.pageTitle}>Manage Admissions</h1>
      
      <div className={styles.panel}>
        <h2>Recent Applications & Enrollments</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Course Applied</th>
              <th>Application Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '1rem' }}>No admissions found.</td>
              </tr>
            ) : (
              enrollments.map(enrollment => (
                <tr key={enrollment.id}>
                  <td>{enrollment.user.name || 'N/A'}</td>
                  <td>{enrollment.user.email}</td>
                  <td style={{ textTransform: 'capitalize' }}>{enrollment.courseId.replace(/-/g, ' ')}</td>
                  <td>{new Date(enrollment.createdAt).toLocaleDateString()}</td>
                  <td>
                    <span className={enrollment.status === 'ACTIVE' ? styles.badgeSuccess : (enrollment.status === 'PENDING' ? styles.badgePending : styles.badgeError)}>
                      {enrollment.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.actionBtn} style={{ marginRight: '0.5rem', padding: '0.3rem 0.6rem', border: 'none', background: '#3b82f6', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Review</button>
                    {enrollment.status !== 'ACTIVE' && (
                      <form action={approveAdmission} style={{ display: 'inline-block' }}>
                        <input type="hidden" name="id" value={enrollment.id} />
                        <button type="submit" className={styles.actionBtn} style={{ padding: '0.3rem 0.6rem', border: 'none', background: '#10b981', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Approve</button>
                      </form>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
