import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  Layout,
  SEO,
  HeadingWithCopy,
  Service,
  ContactSection,
} from '../components';

function HomesPage({ data }) {
  const homesHero = getImage(data.homesHero);
  const homes = data.allSanityHomes.nodes;
  return (
    <Layout>
      <SEO title="Homes" />
      <Hero imageData={homesHero} />
      <OurHomes />
      <Homes homes={homes} />
      <ContactSection />
    </Layout>
  );
}

function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function OurHomes() {
  return (
    <HeadingWithCopy
      id="homes"
      heading="Our Homes"
      copyArray={[
        'Bruen Family Homes are homes that you love to come back to every day. They’re tailored for your lifestyle, look how you want them to look, and are built with quality craftsmanship.',
        'Our team has over 30 years of expertise to realise your design and living requirements. Throughout the process, we stay faithful to your own style and needs. We are in constant communication with you, making sure you get a hassle-free construction experience giving you greater peace of mind.',
        'We are licensed builders with all relevant insurances in place, including Home Warranty Insurance and compliant with Safe Work Australia guidelines and NSW COVIDSafe plans.',
        'Licence Number. 262413C',
      ]}
    />
  );
}

function Homes({ homes }) {
  return (
    <>
      {homes.map((service, index) => (
        <Service
          key={service.title}
          service={service}
          reverse={index % 2 === 0}
        />
      ))}
    </>
  );
}

export const query = graphql`
  query {
    homesHero: file(relativePath: { eq: "homes-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920, height: 1080)
      }
    }
    allSanityHomes {
      nodes {
        _rawBody
        id
        publishedAt
        title
        heroImage {
          asset {
            fluid(maxWidth: 450) {
              ...GatsbySanityImageFluid
            }
          }
        }
        images {
          _key
          asset {
            fluid(maxWidth: 450) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`;

export default HomesPage;
