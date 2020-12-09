import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, SEO, BGImageRight, ContactSection } from "../components";

function AboutPage({ data }) {
  const newHomes = getImage(data.newHomes);
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title="About Us" />
      <Hero imageData={newHomes} />
      <BGImageRight>
        <AboutUs imageData={whoAreWe} />
        <WhyChooseUs imageData={whoAreWe} />
      </BGImageRight>
      <ContactSection />
    </Layout>
  );
}

// TODO replace hero image
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function AboutUs({ imageData }) {
  return (
    <article className="text-white bg-brand-blue">
      <BGImageRight>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="border-white heading-2">About Us</h1>
              <div className="mt-5 prose text-white">
                <p>
                  Lorem psum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt t labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
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

function WhyChooseUs({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto sm:px-6 lg:px-8">
        <h2 className="border-white heading-2">Why Choose Us?</h2>
        <div className="mt-5 prose text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor Sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
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

export default AboutPage;
