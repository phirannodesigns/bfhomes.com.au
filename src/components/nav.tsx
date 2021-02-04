import * as React from "react";
import { Link } from "gatsby";

import config from "../data/config";
import { SiteLogo } from "./vectors/logos";

function Nav() {
  return (
    <nav className="sticky top-0 z-20 font-medium bg-brand-blue">
      <div className="flex items-center w-full max-w-screen-xl px-4 py-6 mx-auto space-x-6 sm:px-6 lg:px-8">
        <Link to="/" className="block">
          <span className="sr-only">{config.title}</span>
          <SiteLogo className="h-16 lg:h-24" />
        </Link>
        <div className="flex flex-col items-end justify-between flex-1">
          <div className="flex items-center space-x-6 text-brand-teal">
            <a href={`tel:${config.phone}`}>Call us on {config.phone}</a>
            <ul className="items-center hidden space-x-3 sm:flex">
              {config.socialLinks.map((socialLink) => (
                <li key={socialLink.url}>
                  <a
                    href={socialLink.url}
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-brand-blue"
                  >
                    <span className="sr-only">{socialLink.label}</span>
                    <socialLink.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
