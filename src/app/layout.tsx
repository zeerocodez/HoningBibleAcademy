import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Honing Bible Academy',
  description: 'Grow in confidence. Go deeper in Scripture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
