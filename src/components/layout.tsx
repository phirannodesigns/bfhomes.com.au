import * as React from 'react';

import { Footer } from './footer';
import { MobileMenu } from './mobile-menu';
import { Nav } from './nav';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white fill-available">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileMenu />
    </div>
  );
}

export { Layout };
