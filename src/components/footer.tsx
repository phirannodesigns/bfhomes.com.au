import { Link } from "gatsby";
import React from "react";

import config from "../data/config";
import { SiteLogo } from "./vectors/logos";

function Footer() {
  return (
    <footer className="font-medium text-white bg-brand-blue">
      <div className="grid w-full max-w-screen-xl gap-4 px-4 pt-32 pb-12 mx-auto lg:grid-cols-3 sm:px-6 lg:px-8">
        <div className="max-w-xs transform -translate-y-20">
          <Link to="/">
            <span className="sr-only">{config.title}</span>
            <SiteLogo />
          </Link>
        </div>
        <nav>
          <ul>
            {config.siteNavigation.map((navItem) => (
              <li key={navItem.slug} className="prose-lg hover:underline">
                <Link to={navItem.slug}>{navItem.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <dl className="prose-lg">
          <div>
            <dt className="inline">Phone: </dt>
            <dd className="inline">
              <a href={`tel:${config.phone}`} className="hover:underline">
                {config.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="inline">Email: </dt>
            <dd className="inline">
              <a href={`mailto:${config.email}`} className="hover:underline">
                {config.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="inline">Office Hours: </dt>
            <dd className="inline">{config.officeHours}</dd>
          </div>
          <div>
            <dt className="inline">Address: </dt>
            <dd className="inline">{config.address}</dd>
          </div>
        </dl>
        <div className="grid py-4 border-b border-white lg:grid-cols-2 lg:col-start-2 lg:col-span-2">
          <div className="lg:col-start-2">
            <a
              href="https://www.phirannodesigns.com.au"
              className="font-normal uppercase hover:underline"
            >
              Website by Phiranno Designs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
