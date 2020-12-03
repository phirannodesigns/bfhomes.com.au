import * as React from "react";
import { Link } from "gatsby";

import { SiteLogo } from "./vectors/logos";
import config from "../data/config";
import { HiMenu } from "react-icons/hi";
import { useMenuContext } from "../utils/hooks";

function Nav() {
  const { isOpen, setIsOpen } = useMenuContext();
  return (
    <nav className="font-medium bg-brand-blue">
      <div className="flex items-center w-full max-w-screen-xl px-4 py-5 mx-auto space-x-6 lg:items-stretch sm:px-6 lg:px-8">
        <Link to="/">
          <SiteLogo className="h-16 lg:h-24" />
        </Link>
        <div className="flex flex-col items-end justify-between flex-1">
          <div className="flex items-center space-x-6 text-brand-teal">
            <a href={`tel:${config.phone}`}>Call us on {config.phone}</a>
            <ul className="flex items-center space-x-3">
              {config.socialLinks.map((socialLink) => (
                <li key={socialLink.url}>
                  <a
                    href={socialLink.url}
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-brand-blue"
                  >
                    <socialLink.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="hidden space-x-12 text-white lg:flex">
            {config.siteNavigation.map((navItem) => (
              <li key={navItem.slug}>
                <Link to={navItem.slug} className="uppercase">
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-1 text-xl text-brand-teal"
        >
          <HiMenu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
}

export { Nav };
