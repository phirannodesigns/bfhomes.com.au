/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import { Nav } from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white border-t-4 border-teal-500 fill-available">
      <Nav />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export { Layout };
