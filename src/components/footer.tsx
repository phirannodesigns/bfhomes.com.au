import * as React from 'react';
import { Menu } from '@headlessui/react';
import { Link } from 'gatsby';

import config from '../data/config';
import { SiteLogo } from './vectors/logos';

function Footer() {
  return (
    <footer className="font-medium text-white bg-brand-blue">
      <div className="grid w-full max-w-screen-xl gap-12 px-4 pt-32 pb-12 mx-auto lg:grid-cols-3 sm:px-6 lg:px-8">
        <div className="w-full max-w-xs mx-auto transform -translate-y-12 lg:-translate-y-20">
          <Link to="/" className="block">
            <span className="sr-only">{config.title}</span>
            <SiteLogo />
          </Link>
        </div>
        <nav>
          <ul>
            {config.siteNavigation.map((navItem) => (
              <li key={navItem.label} className="prose-lg text-white">
                {navItem.slug ? (
                  <Link
                    key={navItem.label}
                    to={navItem.slug}
                    className="hover:underline"
                  >
                    {navItem.label}
                  </Link>
                ) : (
                  <Menu key={navItem.label} as="div">
                    <Menu.Button className="font-medium">
                      {navItem.label}
                    </Menu.Button>
                  </Menu>
                )}
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
        <div className="grid gap-12 py-4 border-b border-white lg:grid-cols-2 lg:col-start-2 lg:col-span-2">
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
