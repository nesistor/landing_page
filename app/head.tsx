import { Metadata } from 'next';

export default function Head() {
  return (
    <>
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/x-icon"
        sizes="any"
      />
      <link
        rel="icon"
        href="/icons/icon-16x16.png"
        type="image/png"
        sizes="16x16"
      />
      <link
        rel="icon"
        href="/icons/icon-32x32.png"
        type="image/png"
        sizes="32x32"
      />
      <link
        rel="apple-touch-icon"
        href="/icons/apple-touch-icon.png"
        sizes="180x180"
      />
    </>
  );
} 