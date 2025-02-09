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
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, // Główna favicon
      { url: '/icons/icon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icons/icon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/wolf_icon-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'Karol Malicki - Portfolio',
    description: ' portfolio programisty',
    siteName: 'Karol Malicki Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Zostaw ten obraz, lub dodaj wilka też tutaj
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  metadataBase: new URL('https://01daysoft.pl'),
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
