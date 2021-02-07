import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import {
  ContactSection,
  HeadingWithCopy,
  Layout,
  SEO,
  Service,
} from '../../components';

function RenovationsPage({ data }) {
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="House Extensions" />
      <Hero imageData={newHomes} />
      <HouseExtension />
      <HouseExtensions imageData={newHomes} />
      <ContactSection />
    </Layout>
  );
}

// TODO replace hero image
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function HouseExtension() {
  return (
    <HeadingWithCopy
      id="house-extensions"
      heading="House Extensions"
      copy="House extensions give you more room to move and can be an economical and
      functional way to breathe more life into your home instead of looking elsewhere.
      Bruen Family Homes have over 30 years of designing and building house extensions
      by constructing using vacant land or up into a second storey. We can build all types
      of extensions from living areas, bathrooms, kitchens, bedrooms, and study or office
      areas. We perform large or small extensions, including ones that require major
      structural works. We consult with you to make the most from your house
      extension."
    />
  );
}

const houseExtensions = [
  {
    id: 'bathrooms',
    title: 'Bathrooms',
    copy: `<p>
    If your bathroom is old, cramped, or frequently occupied, extending your home
    with a new bathroom is a popular choice to gain more functionality. We can extend
    your existing bathroom or build new bathrooms and/or ensuites that are close to
    your current floorplan. Ask us how we can extend your bathroom today.
    </p>`,
    slug: '/renovations/house-extensions/#bathrooms',
  },
  {
    id: 'kitchens',
    title: 'Kitchens',
    copy: `<p>
    Getting more from your kitchen is easy with Bruen Family Homes. We can extend
    your kitchen, increasing the space between appliances, benches, and sinks. We can
    design a new open plan living area, depending on how your home is structured.
    Talk to us about getting more from your kitchen with a Bruen quality extension.
    </p>`,
    slug: '/renovations/house-extensions/#kitchens',
  },
];

function HouseExtensions({ imageData }) {
  return (
    <>
      {houseExtensions.map((service, index) => (
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
