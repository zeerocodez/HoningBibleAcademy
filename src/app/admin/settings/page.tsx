import styles from '../page.module.css';
import { saveSettings } from '../actions';

export default function AdminSettings() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Admin Settings</h1>
      
      <div className={styles.dashboardGrid}>
        <div className={styles.panel}>
          <h2>General Settings</h2>
          <form action={saveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Academy Name</label>
              <input type="text" defaultValue="Honing Bible Academy" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contact Email</label>
              <input type="email" defaultValue="admin@honingbibleacademy.com" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone Number</label>
              <input type="text" defaultValue="+2347064941557" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <button type="submit" className={styles.actionBtn} style={{ padding: '0.6rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '0.5rem' }}>Save Changes</button>
          </form>
        </div>

        <div className={styles.panel}>
          <h2>System Preferences</h2>
          <form action={saveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="openReg" name="openReg" defaultChecked />
              <label htmlFor="openReg" style={{ fontWeight: '500' }}>Enable New Admissions</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="maintenance" name="maintenance" />
              <label htmlFor="maintenance" style={{ fontWeight: '500' }}>Maintenance Mode</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="emailNotifs" name="emailNotifs" defaultChecked />
              <label htmlFor="emailNotifs" style={{ fontWeight: '500' }}>Send Email Notifications to Admin</label>
            </div>
            <button type="submit" className={styles.actionBtn} style={{ padding: '0.6rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}>Update Preferences</button>
          </form>
        </div>
      </div>
    </div>
  );
}
