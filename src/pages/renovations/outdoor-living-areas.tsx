import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Layout,
  SEO,
  HeadingWithCopy,
  Service,
  ContactSection,
} from "../../components";

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
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    />
  );
}

const outdoorLivingAreas = [
  {
    id: "decks",
    title: "Decks",
    copy: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>`,
    slug: "/renovations/outdoor-living-areas/#decks",
  },
  {
    id: "flyover-roofs",
    title: "Flyover Roofs",
    copy: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>`,
    slug: "/renovations/outdoor-living-areas/#flyover-roofs",
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
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 1080)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 820)
      }
    }
  }
`;

export default RenovationsPage;
