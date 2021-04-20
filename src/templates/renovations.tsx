import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import {
  ContactSection,
  HeadingWithCopy,
  Hero,
  HeroVideo,
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
      {renovationArea.heroVideoID ? (
        <HeroVideo
          YTVideoID={renovationArea.heroVideoID}
          imageData={renovationArea.heroImage.asset.gatsbyImageData}
        />
      ) : (
        <Hero>
          <GatsbyImage
            image={renovationArea.heroImage.asset.gatsbyImageData}
            className="flex-1"
            alt=""
          />
        </Hero>
      )}

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
          heroVideoID
          heroImage {
            asset {
              gatsbyImageData
            }
          }
          renovations {
            _key
            _rawBody
            heroImage {
              asset {
                gatsbyImageData
              }
            }
            images {
              _key
              asset {
                gatsbyImageData
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
