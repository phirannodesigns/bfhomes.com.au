import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { HiArrowRight } from 'react-icons/hi';

import { BGImageRight, ContactSection, Layout, SEO } from '../components';

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
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
    </div>
  );
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
        gatsbyImageData(layout: CONSTRAINED, width: 1920, height: 1080)
      }
    }
  }
`;

export default NotFoundPage;
