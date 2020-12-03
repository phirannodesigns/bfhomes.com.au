import * as React from "react";
import { Link } from "gatsby";

import { SiteLogo } from "./vectors/logos";
import config from "../data/config";

function Nav() {
  return (
    <nav className="px-4 py-5 bg-brand-blue sm:px-6 lg:px-8">
      <div className="flex">
        <Link to="/">
          <SiteLogo className="h-24" />
        </Link>
        <div className="flex flex-col items-end justify-between flex-1">
          <div className="text-brand-teal">Call us on {config.phone}</div>
          <ul className="flex space-x-8 text-white">
            {config.siteNavigation.map((navItem) => (
              <li key={navItem.slug}>
                <Link to={navItem.slug} className="uppercase">
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
