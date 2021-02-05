import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  Layout,
  SEO,
  HeadingWithCopy,
  Service,
  ContactSection,
} from '../../components';

function RenovationsPage({ data }) {
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="Outdoor Living Areas" />
      <Hero imageData={newHomes} />
      <OutdoorLivingArea />
      <OutdoorLivingAreas imageData={newHomes} />
      <ContactSection />
    </Layout>
  );
}

// TODO replace hero image
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function OutdoorLivingArea() {
  return (
    <HeadingWithCopy
      id="outdoor-living-areas"
      heading="Outdoor Living Areas"
      copyArray={[
        'Whether you’re looking to accommodate decks, built-in barbecues, flyover roofs, pools, landscaping, or alfresco areas – we can help you achieve your personalised vision for outdoor living and entertaining.',
        'With over 30 years of experience, Bruen Family Homes have designed and built dozens of outdoor living areas that are economical and comfortable. We design around your needs for entertaining guests, taking advantage of NSW North Coast’s weather, or for maximum privacy.',
        'No matter your vision, we sit down with you to see how we can achieve your goals.',
        'See some of our previous work or talk to us today about how we can add more to your home with outdoor living areas',
      ]}
    />
  );
}

const outdoorLivingAreas = [
  {
    id: 'decks',
    title: 'Decks',
    copy: `<p>
    Always a winner no matter the time of year, a polished and roomy deck is a great
    compliment to any house. We can build from scratch or renovate your existing
    deck in a variety of materials and timber finishes. We help you design a deck that
    suits your lifestyle adding space for barbeques, furniture, and more.
    </p>`,
    slug: '/renovations/outdoor-living-areas/#decks',
  },
  {
    id: 'flyover-roofs',
    title: 'Flyover Roofs',
    copy: `<p>
    Also known as patio roofs, a flyover roof is a functional and economical way to
    extend your living area. With higher ceilings and greater ventilation, a flyover roof
    is a great and easy way to make the outdoors a part of the everyday. We can
    design and build a free-standing or attached roof depending on your wants and
    needs.
    </p>`,
    slug: '/renovations/outdoor-living-areas/#flyover-roofs',
  },
];

function OutdoorLivingAreas({ imageData }) {
  return (
    <>
      {outdoorLivingAreas.map((service, index) => (
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
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
  }
`;

export default RenovationsPage;
