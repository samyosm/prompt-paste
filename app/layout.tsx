// Initializing
import '../setup';

import type {Metadata} from 'next';
import {Space_Grotesk as Font} from 'next/font/google';
import './globals.css';
import {Header} from '@/components/header/Header';
import {Toaster} from 'sonner';
import cn from 'clsx';

import {HiOutlinePlus as PlusIcon} from 'react-icons/hi2';

const font = Font({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prompt Paste',
  description: 'Share your prompts!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} grid h-screen max-h-screen grid-rows-[auto_1fr_auto] overflow-hidden bg-bland-50 antialiased`}
      >
        <Toaster position="top-right" richColors />
        <Header className="h-fit">
          <a
            href="/"
            className={cn(
              'px-3 py-2 rounded-lg hover:underline flex items-center gap-1 group cursor-pointer',
              'text-white bg-primary-400 hover:bg-primary-500',
            )}
          >
            <p>New Prompt</p>
            <PlusIcon />
          </a>
        </Header>
        {children}
      </body>
    </html>
  );
}
