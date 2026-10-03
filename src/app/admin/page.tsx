import styles from './page.module.css';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Dashboard Overview</h1>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Students</h3>
          <p className={styles.statNumber}>124</p>
        </div>
        <div className={styles.statCard}>
          <h3>Active Courses</h3>
          <p className={styles.statNumber}>17</p>
        </div>
        <div className={styles.statCard}>
          <h3>Pending Admissions</h3>
          <p className={styles.statNumber}>12</p>
        </div>
        <div className={styles.statCard}>
          <h3>Revenue (MTD)</h3>
          <p className={styles.statNumber}>₦ 450,000</p>
        </div>
      </div>

      <div className={styles.dashboardGrid}>
        <div className={styles.panel}>
          <h2>Recent Enrollments</h2>
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
              <tr>
                <td>John Doe</td>
                <td>Cert. Biblical Studies</td>
                <td>Oct 1, 2026</td>
                <td><span className={styles.badgeSuccess}>Active</span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Dip. Spiritual Formation</td>
                <td>Sep 28, 2026</td>
                <td><span className={styles.badgeSuccess}>Active</span></td>
              </tr>
              <tr>
                <td>Michael Johnson</td>
                <td>Master's Degree</td>
                <td>Sep 25, 2026</td>
                <td><span className={styles.badgePending}>Pending Review</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={styles.panel}>
          <h2>System Alerts</h2>
          <ul className={styles.alertList}>
            <li><span className={styles.icon}>🔔</span> 3 new admission applications require review.</li>
            <li><span className={styles.icon}>🔔</span> Database backup completed successfully.</li>
            <li><span className={styles.icon}>⚠️</span> Student 'Paul Adams' reported a technical issue.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
