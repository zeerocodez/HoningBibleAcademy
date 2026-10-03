import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: 'Honing Bible Academy | World-Class Theological Education',
  description: 'Equipping believers, ministers, and Christian leaders with sound biblical insight, effective ministry skills, and scholarly competence.',
  keywords: 'Bible Academy, Theology, Christian Leadership, Ministry Training, Online Bible School, Nigeria Bible College',
  openGraph: {
    title: 'Honing Bible Academy',
    description: 'Equipping for Sound Biblical Insight, Effective Ministry, Leadership and Scholarship.',
    url: 'https://honingbibleacademy.com', // Replace with actual URL
    siteName: 'Honing Bible Academy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=1200&q=80', // Beautiful open Bible for link preview
        width: 1200,
        height: 630,
        alt: 'Honing Bible Academy',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honing Bible Academy',
    description: 'Equipping for Sound Biblical Insight and Effective Ministry.',
    images: ['https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
