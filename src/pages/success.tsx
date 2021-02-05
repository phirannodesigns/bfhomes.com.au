import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { HiArrowRight } from 'react-icons/hi';

import { BGImageRight, ContactSection, Hero, Layout, SEO } from '../components';

function SuccessPage({ data }) {
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="Success" />
      <Hero imageData={newHomes} />
      <Success />
      <ContactSection />
    </Layout>
  );
}

function Success() {
  return (
    <article className="text-white bg-brand-blue">
      <BGImageRight>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-5">
            <h1 className="border-white heading-2">Success</h1>
            <p>Thank you, our team will get back to you shortly.</p>
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
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
  }
`;

export default SuccessPage;
