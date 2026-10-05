import PageHero from '@/components/PageHero';
import styles from '../page.module.css';
import Link from 'next/link';

export default function ELibraryCategoryPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category || 'all';

  const formatCategoryName = (cat: string) => {
    return cat.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <>
      <PageHero title={`HBA Digital Library: ${formatCategoryName(category)}`} imageSrc="/lucas-law-ecELcxmJTk4-unsplash.jpg" />
      <main className={styles.main}>
        <div className="container" style={{ marginTop: '2rem' }}>
          
          <div style={{marginBottom: '2rem'}}>
            <Link href="/learning" style={{color: '#2563eb', textDecoration: 'none'}}>← Back to Learning Dashboard</Link>
          </div>

          <section className={styles.section}>
            <h2>{formatCategoryName(category)} Resources</h2>
            <p className={styles.description}>Browse and access materials available in this category.</p>
            
            {/* Library Content */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img src="/images/biblical_insight_book.jpg" alt="Do You Understand What You Are Reading?" style={{ width: '80px', height: '110px', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1f2937' }}>Do You Understand What You Are Reading? A Journey to Biblical Insight</h3>
                    <p style={{ margin: 0, color: '#64748b' }}>Clifford Stephen Ph.D, D.Div</p>
                  </div>
                </div>
                <a href="#" download className="button button-primary" style={{ padding: '0.6rem 1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download PDF
                </a>
              </div>
              <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img src="/images/hermeneutics_book.jpg" alt="Introduction to Biblical Hermeneutics" style={{ width: '80px', height: '110px', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1f2937' }}>Introduction to Biblical Hermeneutics</h3>
                    <p style={{ margin: 0, color: '#64748b' }}>Honing Bible Academy Faculty</p>
                  </div>
                </div>
                <a href="#" download className="button button-primary" style={{ padding: '0.6rem 1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download PDF
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
