import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, SEO, BGImageRight, ContactSection } from "../components";

function RenovationsPage({ data }) {
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="Renovations" />
      <Hero imageData={newHomes} />
      <OurRenovations />
      <Renovations imageData={newHomes} />
      <ContactSection />
    </Layout>
  );
}

// TODO replace hero image
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function OurRenovations() {
  return (
    <article className="text-brand-blue">
      <div className="w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="inline-block text-2xl font-bold text-center uppercase border-b-2 border-brand-blue">
            Renovations
          </h2>
          <div className="mt-5 prose">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

const renovations = [
  {
    title: "Bathrooms",
    copy: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>`,
    slug: "/renovations/house-extensions/#bathrooms",
  },
  {
    title: "Kitchens",
    copy: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>`,
    slug: "/renovations/house-extensions/#kitchens",
  },
  {
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

function Renovations({ imageData }) {
  return (
    <>
      {renovations.map((home, index) => (
        <Home
          key={home.title}
          home={home}
          imageData={imageData}
          reverse={index % 2 === 0}
        />
      ))}
    </>
  );
}

function Home({ home, reverse, imageData }) {
  const images = Array(3).fill({ imageData });

  function MainImage() {
    return (
      <div className="relative lg:row-span-2">
        <div className="absolute inset-0 flex">
          <GatsbyImage image={imageData} alt="" className="flex-1" />
        </div>
      </div>
    );
  }

  function InnerContent() {
    return (
      <div className="relative z-10 grid w-full max-w-screen-xl gap-4 px-4 py-20 mx-auto sm:px-6 lg:px-8 lg:grid-cols-4">
        {reverse && <MainImage />}
        <div className="lg:col-span-3">
          <h2
            className={`
          ${reverse ? "border-white" : "border-brand-blue"}
          heading-2`}
          >
            {home.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: home.copy }}
            className={`
            ${reverse ? "text-white" : "text-brand-blue"}
            mt-5 prose-lg font-medium`}
          />
        </div>
        {!reverse && <MainImage />}
        {/* // TODO: Add carousel */}
        {images.map((image) => (
          <div className="relative h-0 aspect-w-4 aspect-h-3">
            <div className="absolute inset-0">
              <GatsbyImage
                image={image.imageData}
                alt=""
                className="w-full h-full max-w-sm mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <article
      className={`
    ${reverse ? "text-white bg-brand-blue" : "text-brand-blue"}
    relative`}
    >
      {reverse ? (
        <BGImageRight>
          <InnerContent />
        </BGImageRight>
      ) : (
        <InnerContent />
      )}
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
