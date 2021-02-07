/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'typeface-montserrat';
import './src/styles/global.css';

import * as React from 'react';

import { MenuContextProvider } from './src/components';

export function wrapRootElement({ element }) {
  return <MenuContextProvider>{element}</MenuContextProvider>;
}
