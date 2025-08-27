import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aplikasi To-Do List',
  description: 'Aplikasi to-do list sederhana dibuat dengan Next.js dan Tailwind CSS',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}