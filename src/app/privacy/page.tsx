import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container section" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1rem' }}>
            <em>Last updated: [Date]</em>
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            This Privacy Policy describes how Honing Bible Academy collects, uses, and protects your personal information. 
            This is a placeholder page that must be reviewed and updated with legally binding terms before launch.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            [Details about data collection, such as name, email, payment information, and course progress.]
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            [Details about how data is used to provide the service, communicate with users, and improve the platform.]
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>3. Data Security</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            [Details about how data is stored securely and who has access to it.]
          </p>
        </div>
      </main>
    </>
  );
}
