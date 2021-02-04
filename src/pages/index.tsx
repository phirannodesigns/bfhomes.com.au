import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { BGImageRight, Layout, SEO } from "../components";

function IndexPage({ data }) {
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="Port Macquarie Home Builders - Renovations - Outdoor Living" />
      <Hero imageData={newHomes} />
    </Layout>
  );
}

// TODO Replace hero image with video
function Hero({ imageData }) {
  return (
    <article className="relative flex flex-1 bg-brand-blue">
      <div className="absolute inset-0 flex flex-1 sm:relative">
        <GatsbyImage
          image={imageData}
          alt=""
          style={{ filter: "grayscale(1)", mixBlendMode: "multiply" }}
          className="flex-1"
        />
      </div>
      <div className="relative flex flex-1 sm:absolute sm:inset-0">
        <BGImageRight>
          <div className="relative z-10 flex items-center justify-center w-full h-full py-12 bg-black bg-opacity-25 sm:inset-0 sm:absolute">
            <h1 className="text-3xl text-center text-white uppercase sm:text-5xl">
              Watch this space. <br />
              New website <br />
              coming soon!
            </h1>
          </div>
        </BGImageRight>
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
  }
`;

export default IndexPage;
