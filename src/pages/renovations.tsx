import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Layout,
  SEO,
  BGImageRight,
  BGImageLeft,
  ContactSection,
} from "../components";
import { HiArrowRight } from "react-icons/hi";

function RenovationsPage({ data }) {
  const newHomes = getImage(data.newHomes);
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title="Renovations" />
      <Hero imageData={newHomes} />
      <Renovations imageData={whoAreWe} />
      <Services imageData={whoAreWe} />
      <BGImageLeft>
        <SeeOurHomes imageData={whoAreWe} />
        <SeeOurOtherServices imageData={whoAreWe} />
      </BGImageLeft>
      <ContactSection />
    </Layout>
  );
}

// TODO replace hero image
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function Renovations({ imageData }) {
  return (
    <article className="relative text-white bg-brand-blue">
      <BGImageRight>
        <div className="relative z-10 w-full max-w-screen-xl px-4 pt-20 pb-40 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="border-white heading-2">Renovations</h1>
              <div className="mt-5 prose text-white">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi t
                  aliquip ex ea commodo consequat.
                </p>
              </div>
              <ul className="grid gap-3 mt-8 text-xl font-medium max-w-prose">
                {[
                  {
                    label: "Lorem ipsum",
                    colour: "text-brand-teal",
                  },
                  {
                    label: "Et dolore magna",
                    colour: "text-gray-400",
                  },
                  {
                    label: "Ut enim ad",
                    colour: "text-blue-400",
                  },
                ].map((service) => (
                  <li
                    key={`${service.label}${service.colour}`}
                    className="flex items-center space-x-3"
                  >
                    <HiArrowRight className={service.colour} />
                    <span>{service.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full max-w-xs mx-auto">
              <div className="relative h-0 aspect-w-3 aspect-h-4">
                <div className="absolute inset-0 flex">
                  {/* // TODO fix object-position for image */}
                  <GatsbyImage image={imageData} alt="" className="flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BGImageRight>
    </article>
  );
}

// TODO Source this data from Sanity
const services = [
  {
    heading: "House Extensions",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    slug: "/renovations/house-extensions/",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Outdoor Living Areas",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
    slug: "/renovations/outdoor-living-areas/",
    image: "../images/new-homes.jpg",
  },
];

function Services({ imageData }) {
  return (
    <ul className="relative z-10 grid w-full max-w-4xl gap-12 px-4 mx-auto transform -translate-y-28 sm:px-6 lg:px-8 lg:grid-cols-2">
      {services.map((service) => (
        <li key={service.slug}>
          <div className="relative h-0 aspect-w-4 aspect-h-3">
            <div className="absolute inset-0 flex">
              <GatsbyImage
                image={imageData}
                alt=""
                className="flex-1 shadow-lg"
              />
            </div>
          </div>
          <Link to={service.slug}>
            <h2 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-blue">
              <span>{service.heading} </span>
              <HiArrowRight aria-hidden className="text-lg" />
            </h2>
          </Link>
          <div className="mt-1 prose">
            <p className="font-medium">{service.copy}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function SeeOurHomes({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto sm:px-6 lg:px-8">
        <h2 className="border-white heading-2">Curious To See Our Homes?</h2>
        <p className="mt-5">
          {/* // TODO: fix this link */}
          <Link
            to="/"
            className="inline-flex tracking-wider items-center space-x-3 px-4 py-2.5 text-sm font-medium uppercase border text-white border-white"
          >
            <span className="whitespace-nowrap">See Our Homes</span>
            <HiArrowRight className="text-lg" />
          </Link>
        </p>
      </div>
    </article>
  );
}

// TODO Source this data from Sanity
const otherServices = [
  {
    heading: "New Homes",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    slug: "/renovations/new-homes/",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Outdoor",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    slug: "/renovations/outdoor/",
    image: "../images/new-homes.jpg",
  },
];

function SeeOurOtherServices({ imageData }) {
  return (
    <article className="text-white bg-brand-blue">
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-center">
            <h2 className="border-white heading-2">See Our Other Services</h2>
          </div>
          <ul className="grid w-full max-w-4xl gap-10 mx-auto mt-10 lg:grid-cols-2">
            {otherServices.map((service) => (
              <li key={service.heading}>
                <div className="relative h-0 aspect-w-4 aspect-h-3">
                  <div className="absolute inset-0 flex">
                    <GatsbyImage
                      image={imageData}
                      alt=""
                      className="flex-1 shadow-lg"
                    />
                  </div>
                </div>
                <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
                  <span>{service.heading}</span>
                  <HiArrowRight aria-hidden className="text-lg" />
                </h3>
                <div className="font-medium prose text-white">
                  <p className="clamp-3">{service.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
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
