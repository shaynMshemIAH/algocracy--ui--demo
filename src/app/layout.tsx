import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Algocracy UI',
  description: 'Pre-trial decision model using LdD traversal logic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}