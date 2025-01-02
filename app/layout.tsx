// Initializing
import '../setup';

import type {Metadata} from 'next';
import {Space_Grotesk as Font} from 'next/font/google';
import './globals.css';
import {Header} from '@/components/header/Header';
import {Button} from '@/components/button/Button';
import {Toaster} from 'sonner';

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
        <Header className="">
          <Button RightIcon={PlusIcon} variant="filled" label="New Prompt" />
        </Header>
        {children}
      </body>
    </html>
  );
}
