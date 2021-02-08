import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import * as React from 'react';

import {
  ContactSection,
  HeadingWithCopy,
  Hero,
  Layout,
  SEO,
  Service,
} from '../components';

function RenovationsPageTemplate({ data, pageContext }) {
  const renovationArea = data.allSanityRenovations.nodes[0].renovation.find(
    (reno: { slug: { current: string } }) =>
      reno.slug.current === pageContext.slug
  );

  return (
    <Layout>
      <SEO title={renovationArea.title} />
      <Hero>
        <Image
          fluid={renovationArea.heroImage.asset.fluid}
          className="flex-1"
        />
      </Hero>
      <Services renovationArea={renovationArea} />
      <ContactSection />
    </Layout>
  );
}

function Services({ renovationArea }) {
  return (
    <>
      <HeadingWithCopy
        id={renovationArea.slug.current}
        heading={renovationArea.title}
        rawBody={renovationArea._rawBody}
      />
      {renovationArea.renovations.map((service, index) => (
        <Service
          key={service._key}
          service={service}
          reverse={index % 2 === 0}
        />
      ))}
    </>
  );
}

export const query = graphql`
  query {
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    allSanityRenovations {
      nodes {
        renovation {
          _rawBody
          title
          heroImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          renovations {
            _key
            _rawBody
            heroImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            images {
              _key
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            slug {
              current
            }
            title
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

export default RenovationsPageTemplate;
