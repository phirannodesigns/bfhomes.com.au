import * as React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { HiPhone, HiX } from "react-icons/hi";

import config from "../data/config";
import { SiteLogo } from "./vectors/logos";
import { useMenuContext, useOnClickOutside } from "../utils/hooks";

function MobileMenu() {
  const { pathname } = useLocation();
  const ref = React.useRef();
  const { isOpen, setIsOpen } = useMenuContext();
  function handleClose() {
    setIsOpen(false);
  }
  useOnClickOutside(ref, handleClose);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex bg-gray-600 bg-opacity-75"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ bounceDamping: 9 }}
            className="flex justify-end flex-1 ml-14"
          >
            <div
              ref={ref}
              className="relative flex flex-col flex-1 w-full max-w-xs bg-brand-blue"
            >
              <div className="absolute top-0 left-0 pt-2 -ml-12">
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Close sidebar</span>
                  <HiX className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <SiteLogo className="h-16" />
                </div>
                <nav className="mt-5">
                  <ul className="px-2 space-y-1">
                    {config.siteNavigation.map((node) =>
                      node.submenu ? (
                        <SubMenu
                          key={node.label}
                          node={node}
                          handleClose={handleClose}
                        />
                      ) : (
                        <li key={node.slug}>
                          <Link
                            to={node.slug}
                            onClick={handleClose}
                            className={`
                        ${
                          pathname === node.slug
                            ? " bg-gray-800 text-white"
                            : "text-gray-300 hover:text-white"
                        }
                        flex items-center px-2 py-2 text-base font-medium uppercase rounded-md hover:text-white hover:bg-white hover:bg-opacity-10`}
                          >
                            {node.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
              <div className="flex flex-shrink-0 p-4 bg-gray-700">
                <a
                  href={`tel:${config.phone}`}
                  className="flex-1 flex-shrink-0 block group"
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 text-white bg-gray-900 rounded-full">
                      <HiPhone />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        Call us on
                      </p>
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                        {config.phone}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const transition = { min: 0, max: 100, bounceDamping: 9 };

function SubMenu({ node, handleClose }) {
  const { pathname } = useLocation();
  return (
    <Menu as="li">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center justify-between w-full px-2 py-2 text-base font-medium text-gray-300 uppercase rounded-md hover:text-white hover:bg-white hover:bg-opacity-10">
            <span>{node.label}</span>
            <span className="-mr-1">
              <motion.svg
                viewBox="0 0 20 20"
                fill="currentColor"
                initial={{ rotate: "0deg" }}
                animate={{ rotate: open ? "90deg" : "0deg" }}
                transition={transition}
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </span>
          </Menu.Button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { height: "auto", opacity: 1, overflow: "visible" },
                  closed: { height: 0, opacity: 0, overflow: "hidden" },
                }}
                transition={transition}
              >
                <Menu.Items static as="ul" className="rounded-md">
                  {node.submenu.map((navItem) => (
                    <Menu.Item key={navItem.id} as="li">
                      {({ active }) => (
                        <Link
                          to={navItem.slug}
                          onClick={handleClose}
                          className={`${
                            active
                              ? "bg-opacity-10 text-white"
                              : "bg-opacity-0 text-gray-300"
                          }
                        ${
                          pathname === node.slug
                            ? " bg-gray-800 text-white"
                            : "text-gray-300 hover:text-white"
                        }
                        flex items-center justify-between w-full px-2 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-white hover:bg-opacity-10`}
                        >
                          {navItem.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}

export { MobileMenu };
