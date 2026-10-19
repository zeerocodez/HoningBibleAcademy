'use client';

import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { getStudents } from '../actions';

export default function AdminStudents() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudents()
      .then(setStudents)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '1.5rem' }}>Loading students...</td>
              </tr>
            ) : students.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '1.5rem' }}>No students registered yet.</td>
              </tr>
            ) : (
              students.map(student => {
                const hasActive = student.enrollments?.some((e: any) => e.status === 'ACTIVE');
                return (
                  <tr key={student.id}>
                    <td>{student.name || 'N/A'}</td>
                    <td>{student.email}</td>
                    <td>{new Date(student.createdAt).toLocaleDateString()}</td>
                    <td>{student.enrollments?.length || 0} Course(s)</td>
                    <td>
                      <span className={hasActive ? styles.badgeSuccess : styles.badgePending}>
                        {hasActive ? 'Enrolled' : (student.enrollments?.length > 0 ? 'Pending' : 'Not Enrolled')}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
