import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, SEO, ContactSection } from "../../components";
import { HiArrowRight } from "react-icons/hi";

function RenovationsPage({ data }) {
  const newHomes = getImage(data.newHomes);
  const curiousToSeeOurHomes = getImage(data.curiousToSeeOurHomes);
  return (
    <Layout>
      <SEO title="Renovations" />
      <Hero imageData={newHomes} />
      <HouseExtensions imageData={newHomes} />
      <OutdoorLivingAreas imageData={newHomes} />
      <CuriousToSeeOurHomes imageData={curiousToSeeOurHomes} />
      <ContactSection />
    </Layout>
  );
}

// TODO replace hero image
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function Service({ title, services, imageData }) {
  return (
    <article>
      <div className="text-white bg-brand-blue">
        <div className="relative z-10 grid w-full max-w-screen-xl gap-4 px-4 pt-20 mx-auto pb-44 sm:px-6 lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="border-white heading-2">{title}</h2>
            <div className="mt-5 prose text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna et aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
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
                  colour: "text-blue-400",
                },
                {
                  label: "Ut enim ad",
                  colour: "text-gray-400",
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
          <div className="relative">
            <div className="absolute inset-0">
              <GatsbyImage
                image={imageData}
                alt=""
                className="w-full h-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="grid w-full gap-12 px-4 mx-auto transform -translate-y-12 lg:w-2/3 sm:px-6 lg:px-8 lg:grid-cols-2 lg:-translate-y-24">
        {services.map((service) => (
          <li key={service.slug}>
            <Link aria-hidden tabIndex={-1} to={service.slug} className="block">
              <div className="relative h-0 aspect-w-4 aspect-h-3">
                <div className="absolute inset-0 flex">
                  <GatsbyImage
                    image={imageData}
                    alt=""
                    className="flex-1 block shadow-lg"
                  />
                </div>
              </div>
            </Link>
            <Link to={service.slug} className="inline-block mt-5">
              <h2 className="flex items-center space-x-2 text-2xl font-bold uppercase text-brand-blue">
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
    </article>
  );
}

const houseExtensions = [
  {
    heading: "Bathrooms",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    slug: "/renovations/house-extensions/#bathrooms",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Kitchens",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
    slug: "/renovations/house-extensions/#kitchens",
    image: "../images/new-homes.jpg",
  },
];

function HouseExtensions({ imageData }) {
  return (
    <Service
      title="House Extensions"
      services={houseExtensions}
      imageData={imageData}
    />
  );
}

const outdoorLivingAreas = [
  {
    heading: "Decks",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    slug: "/renovations/outdoor-living-areas/#decks",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Flyover Roofs",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
    slug: "/renovations/outdoor-living-areas/#flyover-roofs",
    image: "../images/new-homes.jpg",
  },
];

function OutdoorLivingAreas({ imageData }) {
  return (
    <Service
      title="Outdoor Living Areas"
      services={outdoorLivingAreas}
      imageData={imageData}
    />
  );
}

function CuriousToSeeOurHomes({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto bg-black bg-opacity-25 sm:px-6 lg:px-8">
        <h2 className="text-5xl border-white heading-2">
          Curious To See Our Homes?
        </h2>
        <p className="mt-5">
          <Link
            to="/homes/"
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

export const query = graphql`
  query {
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 1080)
      }
    }
    curiousToSeeOurHomes: file(relativePath: { eq: "renovations.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 820)
      }
    }
  }
`;

export default RenovationsPage;
