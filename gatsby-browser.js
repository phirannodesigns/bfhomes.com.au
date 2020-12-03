/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from 'react';
import 'typeface-montserrat';
import { MenuContextProvider } from './src/components/menu-context';

import './src/styles/global.css';

export function wrapRootElement({ element }) {
  return <MenuContextProvider>{element}</MenuContextProvider>;
}
