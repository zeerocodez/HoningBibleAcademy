'use client';

import { useState } from 'react';
import styles from '../page.module.css';
import { approveAdmission } from '../actions';
import { APPLICATION_FORM_URL } from '@/lib/constants';

export default function AdminAdmissions() {
  const [enrollments] = useState<any[]>([]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 className={styles.pageTitle} style={{ margin: 0 }}>Manage Admissions</h1>
        <a 
          href={APPLICATION_FORM_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button button-primary"
          style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
        >
          View Application Form ↗
        </a>
      </div>
      
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
                  <td>{enrollment.user?.name || 'N/A'}</td>
                  <td>{enrollment.user?.email}</td>
                  <td style={{ textTransform: 'capitalize' }}>{enrollment.courseId?.replace(/-/g, ' ')}</td>
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

