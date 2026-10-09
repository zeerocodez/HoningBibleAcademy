import PageHero from '@/components/PageHero';
import styles from '../page.module.css';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function ELibraryCategoryPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category || 'all';

  const formatCategoryName = (cat: string) => {
    return cat.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const resources = await prisma.libraryResource.findMany({
    where: category !== 'all' ? { category } : undefined,
    orderBy: { createdAt: 'desc' }
  });

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
              {resources.length === 0 ? (
                <p>No resources available in this category yet.</p>
              ) : (
                resources.map(resource => (
                  <div key={resource.id} style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div style={{ width: '60px', height: '80px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontSize: '2rem' }}>
                        📄
                      </div>
                      <div>
                        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1f2937' }}>{resource.title}</h3>
                        <p style={{ margin: 0, color: '#64748b' }}>{resource.author || 'Honing Bible Academy'}</p>
                      </div>
                    </div>
                    <a href={resource.fileUrl} download target="_blank" rel="noopener noreferrer" className="button button-primary" style={{ padding: '0.6rem 1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      Download
                    </a>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
