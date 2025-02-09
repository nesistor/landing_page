import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Software Engineer & AI Developer Portfolio',
    default: 'Karol Malicki - Software Engineering & AI Development Expert'
  },
  description: 'Profesjonalne portfolio software engineer specjalizującego się w rozwoju AI/ML, systemów cloudowych i nowoczesnych aplikacji webowych',
  keywords: [
    'software engineer',
    'AI developer',
    'machine learning',
    'fullstack development',
    'cloud architecture',
    'web development'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Karol Malicki - Portfolio',
    description: ' portfolio programisty',
    siteName: 'Karol Malicki Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  metadataBase: new URL('https://twoja-domena.pl'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
