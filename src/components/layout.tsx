import * as React from "react";

import { Nav } from "./nav";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white border-t-4 border-teal-500 fill-available">
      <Nav />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export { Layout };
