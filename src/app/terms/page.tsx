
export default function TermsPage() {
  return (
    <>
      <main className="container section" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>
        <div style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1rem' }}>
            <em>Last updated: [Date]</em>
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            These Terms of Service govern your use of the Honing Bible Academy platform. 
            This is a placeholder page that must be reviewed and updated with legally binding terms before launch.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            [Details about agreeing to terms by using the site.]
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>2. Course Access and Intellectual Property</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            [Details about license to access courses, restrictions on sharing materials or account access, and copyright of academy materials.]
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>3. Refunds and Cancellations</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            [Details about the refund policy, 14-day guarantee, etc.]
          </p>
        </div>
      </main>
    </>
  );
}
