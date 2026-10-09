import { prisma } from '@/lib/prisma';
import styles from '../page.module.css';

export default async function AdminStudents() {
  const students = await prisma.user.findMany({
    where: { role: 'STUDENT' },
    orderBy: { createdAt: 'desc' },
    include: { enrollments: true }
  });

  return (
    <div>
      <h1 className={styles.pageTitle}>Manage Students</h1>
      
      <div className={styles.panel}>
        <h2>Registered Students</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined Date</th>
              <th>Enrollments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '1rem' }}>No students registered yet.</td>
              </tr>
            ) : (
              students.map(student => (
                <tr key={student.id}>
                  <td>{student.name || 'N/A'}</td>
                  <td>{student.email}</td>
                  <td>{new Date(student.createdAt).toLocaleDateString()}</td>
                  <td>{student.enrollments.length} Course(s)</td>
                  <td>
                    <button className={styles.actionBtn} style={{ marginRight: '0.5rem', padding: '0.3rem 0.6rem', border: 'none', background: '#3b82f6', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>View</button>
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
