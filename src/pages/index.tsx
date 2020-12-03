import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HiArrowRight } from "react-icons/hi";

import { Layout, SEO } from "../components";

function IndexPage({ data }) {
  const imageData = getImage(data.file);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero imageData={imageData} />
      <Services imageData={imageData} />
    </Layout>
  );
}

function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

// TODO Source this data from Sanity
const services = [
  {
    heading: "New Homes",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    slug: "/services/new-homes/",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Renovations",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
    slug: "/services/renovations/",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Outdoors",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod incididunt an labore et dolore magna.",
    slug: "/services/outdoors/",
    image: "../images/new-homes.jpg",
  },
];

function Services({ imageData }) {
  return (
    <ul className="grid w-full max-w-5xl gap-12 mx-auto -mt-12 lg:grid-cols-3">
      {services.map((service) => (
        <li key={service.slug}>
          <GatsbyImage image={imageData} alt="" className="shadow-lg" />
          <Link to={service.slug}>
            <h2 className="flex items-center mt-4 space-x-2 text-xl font-bold uppercase text-brand-blue">
              <span>{service.heading} </span>
              <HiArrowRight aria-hidden className="text-lg" />
            </h2>
          </Link>
          <p className="mt-1 text-sm font-medium">{service.copy}</p>
        </li>
      ))}
    </ul>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 1080)
      }
    }
  }
`;

export default IndexPage;
