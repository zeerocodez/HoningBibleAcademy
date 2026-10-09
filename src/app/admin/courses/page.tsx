import styles from '../page.module.css';

export default function AdminCourses() {
  const courses = [
    { id: '1', title: 'Certificate in Biblical Studies', duration: '6 Months', status: 'Active', enrolled: 45 },
    { id: '2', title: 'Diploma in Spiritual Formation', duration: '1 Year', status: 'Active', enrolled: 32 },
    { id: '3', title: 'Advanced Leadership Training', duration: '3 Months', status: 'Upcoming', enrolled: 12 },
    { id: '4', title: 'Exegetical Preaching', duration: '8 Weeks', status: 'Active', enrolled: 28 },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className={styles.pageTitle}>Manage Courses</h1>
        <button className={styles.actionBtn} style={{ padding: '0.5rem 1rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+ Add New Course</button>
      </div>
      
      <div className={styles.panel}>
        <h2>All Courses</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Duration</th>
              <th>Students Enrolled</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td style={{ fontWeight: '500' }}>{course.title}</td>
                <td>{course.duration}</td>
                <td>{course.enrolled}</td>
                <td>
                  <span className={course.status === 'Active' ? styles.badgeSuccess : styles.badgePending}>
                    {course.status}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn} style={{ marginRight: '0.5rem', padding: '0.3rem 0.6rem', border: 'none', background: '#3b82f6', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
