/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useLocation } from '@reach/router';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import config from '../data/config';

interface SEOProps {
  description?: string;
  image?: string;
  type?: string;
  lang?: string;
  meta?: [];
  title?: string;
}

/**
 * An SEO component to be used in any component to boost Search Engine Optimization
 * @param title The title of the page
 * @param description The pages description
 * @param lang The language of the website. Default set to 'en-AU'
 * @param image The Open Graph image to be used on the page
 * @param type The Open Graph page type e.g. website, article, product etc.
 * @param meta The HTML meta tag
 */

function SEO({
  description = '',
  image,
  type,
  lang = 'en-AU',
  meta = [],
  title,
}: SEOProps) {
  const { pathname } = useLocation();

  const metaDescription = description || config.description;
  const metaType = type || 'website';
  const metaUrl = `${config.siteUrl}${pathname}`;
  const metaImage = image || `${config.siteUrl}${config.ogImage}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${config.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: metaType,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: config.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        // eslint-disable-next-line unicorn/prefer-spread
      ].concat(meta)}
    />
  );
}

export { SEO };
