import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Layout, SEO, BGImageRight, ContactSection } from '../components';

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
                  Bruen Family Homes have been designing, building, and
                  renovating family homes in Port Macquarie for over 30 years.
                  Beginning as Bruen Corp Building, along with our other arm,
                  Bruen Constructions we have earned a reputation for excellence
                  and quality on the NSW North Coast when it comes to realising
                  the vision of our valued clients
                </p>
                <p>
                  We have the knowledge and passion for building beautiful and
                  practical homes that suit your family lifestyle and décor.
                  Bruen Family Homes are specialists in home extensions, giving
                  you options to extend your home outward or up into a second
                  storey. We have a passion for outdoor living areas, giving
                  your family entertainment options in summer, winter, and every
                  season in-between.
                </p>
                <p>
                  When you partner with us, you become part of the Bruen Family.
                  We always strive to impress our family with quality
                  workmanship and stylish results.
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
        <div className="mt-12 prose text-white">
          <h3>We're Reliable</h3>
          <p>
            It’s simple – we turn up when we say we will and spend as much as we
            quote. We keep you in the loop with every development and are
            pro-active when it comes to solving problems.
          </p>
          <h3>We're A Family</h3>
          <p>
            Our team is made up of quality carpenters, tradespeople, designers,
            and project managers all experienced in delivering projects big and
            small to satisfied clients.
          </p>
          <h3>We're Focused</h3>
          <p>
            We focus all our attention on making sure your home, renovation, or
            outdoor living area is built to last. That’s the Bruen Family
            promise.
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
