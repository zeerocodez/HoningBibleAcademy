'use client';

import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { approveAdmission, getAdmissions } from '../actions';
import { APPLICATION_FORM_URL } from '@/lib/constants';

export default function AdminAdmissions() {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const data = await getAdmissions();
      setEnrollments(data);
    } catch (e) {
      console.error('Failed to load admissions:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleApprove = async (id: string) => {
    const formData = new FormData();
    formData.append('id', id);
    await approveAdmission(formData);
    await loadData();
  };

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
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem' }}>Loading admissions...</td>
              </tr>
            ) : enrollments.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem' }}>No admissions found.</td>
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
                    {enrollment.status !== 'ACTIVE' ? (
                      <button 
                        type="button" 
                        onClick={() => handleApprove(enrollment.id)}
                        className={styles.actionBtn} 
                        style={{ padding: '0.35rem 0.75rem', border: 'none', background: '#10b981', color: 'white', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                      >
                        Approve
                      </button>
                    ) : (
                      <span style={{ color: '#16a34a', fontSize: '0.85rem', fontWeight: 600 }}>Approved</span>
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
