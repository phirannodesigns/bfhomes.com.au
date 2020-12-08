import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown, HiMenu } from "react-icons/hi";

import config from "../data/config";
import { SiteLogo } from "./vectors/logos";
import { useMenuContext } from "../utils/hooks";

function Nav() {
  const { pathname } = useLocation();
  const { setIsOpen } = useMenuContext();
  return (
    <nav className="sticky top-0 z-20 font-medium bg-brand-blue">
      <div className="flex items-center w-full max-w-screen-xl px-4 py-5 mx-auto space-x-6 lg:items-stretch sm:px-6 lg:px-8">
        <Link to="/">
          <span className="sr-only">{config.title}</span>
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
                    <span className="sr-only">{socialLink.label}</span>
                    <socialLink.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="hidden space-x-12 lg:flex">
            {config.siteNavigation.map((navItem) =>
              navItem.submenu ? (
                <SubMenu key={navItem.label} node={navItem} />
              ) : (
                <li key={navItem.slug}>
                  <Link
                    to={navItem.slug}
                    className={`
                ${pathname === navItem.slug ? "text-brand-teal" : "text-white"}
                uppercase`}
                  >
                    {navItem.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-1 text-xl text-brand-teal lg:hidden"
        >
          <HiMenu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
}

function SubMenu({ node }) {
  const { pathname } = useLocation();
  return (
    <li className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex items-center space-x-2 font-medium text-white uppercase transition duration-150 ease-in-out">
              <span>{node.label}</span>
              <span className="-mr-1">
                <HiChevronDown
                  className={`${
                    open
                      ? "rotate-90 duration-100 ease-out"
                      : "rotate-0 ease-in duration-75"
                  }
                  w-5 h-5 transform transition-transform`}
                />
              </span>
            </Menu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 shadow-lg"
              >
                <div className="py-1">
                  {node.submenu.map((navItem) =>
                    navItem.submenu ? (
                      <Menu>
                        <Menu.Button className="inline-flex items-start justify-between w-full px-4 py-2 space-x-2 text-sm font-medium tracking-wider text-left uppercase transition duration-150 ease-in-out text-brand-blue hover:bg-gray-50 focus:bg-gray-50">
                          <span>{navItem.label}</span>
                          <span className="inline-flex items-center transform translate-x-1">
                            <span>&#8203;</span>
                            <HiChevronDown className="w-5 h-5 transition-transform transform" />
                          </span>
                        </Menu.Button>
                        <Transition
                          show={open}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                          // static
                          // className="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 shadow-lg"
                          >
                            {navItem.submenu.map((n) => (
                              <Menu.Item key={n.id}>
                                {({ active }) => (
                                  <Link
                                    to={n.slug}
                                    className={`${
                                      active ? "bg-gray-50" : "bg-white"
                                    } flex justify-between text-brand-blue w-full px-4 py-2 text-left`}
                                  >
                                    {n.label}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <Menu.Item key={navItem.id}>
                        {({ active }) => (
                          <Link
                            to={navItem.slug}
                            className={`${
                              active ? "bg-gray-50" : "bg-white"
                            } flex justify-between text-brand-blue w-full px-4 py-2 text-left`}
                          >
                            {navItem.label}
                          </Link>
                        )}
                      </Menu.Item>
                    )
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </li>
  );
}

export { Nav };
