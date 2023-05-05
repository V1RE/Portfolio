import Header from './header';
import type { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <main className="container py-10">{children}</main>

      <footer>Footer</footer>
    </>
  );
}
