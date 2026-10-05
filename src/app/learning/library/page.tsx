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
            
            {/* Dummy content for the library */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Do You Understand What You Are Reading? A Journey to Biblical Insight</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>Clifford Stephen Ph.D, D.Div</p>
                </div>
                <button className="button button-primary" style={{ padding: '0.5rem 1rem' }}>Download PDF</button>
              </div>
              <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Introduction to Biblical Hermeneutics</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>Honing Bible Academy Faculty</p>
                </div>
                <button className="button button-primary" style={{ padding: '0.5rem 1rem' }}>Download PDF</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
