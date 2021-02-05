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
  const homes = getImage(data.homes);
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="Homes" />
      <Hero imageData={homes} />
      <OurHomes />
      <Homes imageData={newHomes} />
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
      copy=""
      copyArray={[
        'Bruen Family Homes are homes that you love to come back to every day. They’re tailored for your lifestyle, look how you want them to look, and are built with quality craftsmanship.',
        'Our team has over 30 years of expertise to realise your design and living requirements. Throughout the process, we stay faithful to your own style and needs. We are in constant communication with you, making sure you get a hassle-free construction experience giving you greater peace of mind.',
        'We are licensed builders with all relevant insurances in place, including Home Warranty Insurance and compliant with Safe Work Australia guidelines and NSW COVIDSafe plans.',
        'Licence Number. 262413C',
      ]}
    />
  );
}

const homes = [
  {
    id: 'marchment',
    title: 'Marchment',
    copy: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>`,
    slug: '/homes/marchment/',
  },
  {
    id: 'black-caviar',
    title: 'Black Caviar',
    copy: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>`,
    slug: '/homes/black-caviar/',
  },
  {
    id: 'duplex',
    title: 'Duplex',
    copy: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>`,
    slug: '/homes/duplex/',
  },
];

function Homes({ imageData }) {
  return (
    <>
      {homes.map((service, index) => (
        <Service
          key={service.title}
          service={service}
          imageData={imageData}
          reverse={index % 2 === 0}
        />
      ))}
    </>
  );
}

export const query = graphql`
  query {
    homes: file(relativePath: { eq: "homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920, height: 1080)
      }
    }
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920, height: 1080)
      }
    }
  }
`;

export default HomesPage;
