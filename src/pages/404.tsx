import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HiArrowRight } from "react-icons/hi";

import { BGImageRight, ContactSection, Layout, SEO } from "../components";

function NotFoundPage({ data }) {
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="404: Page Not Found" />
      <Hero imageData={newHomes} />
      <PageNotFound />
      <ContactSection />
    </Layout>
  );
}

// TODO Replace hero image with video
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function PageNotFound() {
  return (
    <article className="text-white bg-brand-blue">
      <BGImageRight>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-5">
            <h1 className="border-white heading-2">404: Page Not Found</h1>
            <p>Sorry, the page you were looking for could not be found</p>
            <p>
              <Link
                to="/about-us/"
                className="inline-flex tracking-wider items-center space-x-3 px-4 py-2.5 text-sm font-medium uppercase border text-white border-white"
              >
                <span className="whitespace-nowrap">
                  Find out more about us
                </span>
                <HiArrowRight className="text-lg" />
              </Link>
            </p>
          </div>
        </div>
      </BGImageRight>
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

export default NotFoundPage;
