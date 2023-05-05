import { cx } from 'react-tailwind-variants';
import './globals.css';
import { Roboto_Mono, Manrope } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const metadata = {
  title: { default: 'Niels Mentink', template: '%s | Niels Mentink' },
  description: 'I write code',
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cx(manrope.variable, robotoMono.variable, 'antialiased')}>
      <body className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-white dark:bg-gray-800">
        {children}
      </body>
    </html>
  );
}
