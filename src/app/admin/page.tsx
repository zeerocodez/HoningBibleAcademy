import styles from './page.module.css';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  const [totalStudents, pendingCount, activeCount, recentEnrollments] = await Promise.all([
    prisma.user.count({ where: { role: 'STUDENT' } }).catch(() => 0),
    prisma.enrollment.count({ where: { status: 'PENDING' } }).catch(() => 0),
    prisma.enrollment.count({ where: { status: 'ACTIVE' } }).catch(() => 0),
    prisma.enrollment.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { name: true, email: true }
        }
      }
    }).catch(() => [])
  ]);

  return (
    <div>
      <h1 className={styles.pageTitle}>Dashboard Overview</h1>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Students</h3>
          <p className={styles.statNumber}>{totalStudents}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Active Enrollments</h3>
          <p className={styles.statNumber}>{activeCount}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Pending Admissions</h3>
          <p className={styles.statNumber}>{pendingCount}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Available Courses</h3>
          <p className={styles.statNumber}>17</p>
        </div>
      </div>

      <div className={styles.dashboardGrid}>
        <div className={styles.panel}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0 }}>Recent Enrollments</h2>
            <Link href="/admin/admissions" style={{ fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none' }}>
              View all →
            </Link>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentEnrollments.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '1rem' }}>No enrollments yet.</td>
                </tr>
              ) : (
                recentEnrollments.map((enrollment: any) => (
                  <tr key={enrollment.id}>
                    <td>{enrollment.user?.name || enrollment.user?.email || 'Student'}</td>
                    <td style={{ textTransform: 'capitalize' }}>{enrollment.courseId?.replace(/-/g, ' ')}</td>
                    <td>{new Date(enrollment.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span className={enrollment.status === 'ACTIVE' ? styles.badgeSuccess : styles.badgePending}>
                        {enrollment.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <div className={styles.panel}>
          <h2>Quick Actions & Alerts</h2>
          <ul className={styles.alertList}>
            {pendingCount > 0 ? (
              <li>
                <span className={styles.icon}>🔔</span> {pendingCount} new admission application(s) awaiting review. <Link href="/admin/admissions" style={{ color: '#2563eb' }}>Review</Link>
              </li>
            ) : (
              <li><span className={styles.icon}>✓</span> All student enrollments are currently active and up to date.</li>
            )}
            <li><span className={styles.icon}>🎓</span> Total active enrolled students: {activeCount}</li>
            <li><span className={styles.icon}>📚</span> 17 Certificate programmes available for self-paced learning.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
