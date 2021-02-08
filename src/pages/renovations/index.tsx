import SanityBlockContent from '@sanity/block-content-to-react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { ContactSection, Hero, Layout, SEO } from '../../components';

function RenovationsPage({ data }) {
  const whoAreWe = getImage(data.whoAreWe);
  const [sanityRenovations] = data.allSanityRenovations.nodes;
  return (
    <Layout>
      <SEO title="Renovations" />
      <Hero>
        <Image
          fluid={sanityRenovations.heroImage.asset.fluid}
          className="flex-1"
        />
      </Hero>
      {sanityRenovations.renovation.map((reno) => (
        <Service
          key={reno._key}
          copy={reno._rawBody}
          title={reno.title}
          services={reno.renovations}
          imageData={reno.heroImage.asset.fluid}
        />
      ))}
      <CuriousToSeeOurHomes imageData={whoAreWe} />
      <ContactSection />
    </Layout>
  );
}

function Service({ title, services, imageData, copy }) {
  return (
    <article>
      <div className="text-white bg-brand-blue">
        <div className="relative z-10 grid w-full max-w-screen-xl gap-4 px-4 pt-20 mx-auto pb-44 sm:px-6 lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="border-white heading-2">{title}</h2>
            <div className="mt-5 prose text-white">
              <SanityBlockContent
                blocks={copy}
                renderContainerOnSingleChild
                className="mt-5 font-medium text-white"
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex">
              <Image
                fluid={imageData}
                alt=""
                className="flex-1 w-full h-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="grid w-full gap-12 px-4 mx-auto transform -translate-y-12 lg:w-2/3 sm:px-6 lg:px-8 lg:grid-cols-2 lg:-translate-y-24">
        {services &&
          services.map((service) => (
            <li key={service._key}>
              <Link
                aria-hidden
                tabIndex={-1}
                to={service.slug.current}
                className="block"
              >
                <div className="relative h-0 aspect-w-4 aspect-h-3">
                  <div className="absolute inset-0 flex">
                    <Image
                      fluid={service.heroImage.asset.fluid}
                      alt=""
                      className="flex-1 block shadow-lg"
                    />
                  </div>
                </div>
              </Link>
              <Link to={service.slug.current} className="inline-block mt-5">
                <h2 className="flex items-center space-x-2 text-2xl font-bold uppercase text-brand-blue">
                  <span>{service.title} </span>
                  <HiArrowRight aria-hidden className="text-lg" />
                </h2>
              </Link>
              <div className="-mt-4 prose">
                <SanityBlockContent
                  blocks={service._rawBody}
                  renderContainerOnSingleChild
                  className="font-medium"
                />
              </div>
            </li>
          ))}
      </ul>
    </article>
  );
}

function CuriousToSeeOurHomes({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto bg-black bg-opacity-50 sm:px-6 lg:px-8">
        <h2 className="text-5xl border-white heading-2">
          Curious To See Our Homes?
        </h2>
        <p className="mt-5">
          <Link
            to="/homes/"
            className="inline-flex tracking-wider items-center space-x-3 px-4 py-2.5 text-sm font-medium uppercase border text-white border-white transition duration-150 ease-in-out hover:bg-white hover:text-brand-blue"
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
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    allSanityRenovations {
      nodes {
        id
        title
        heroImage {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        renovation {
          _key
          _rawBody
          heroImage {
            asset {
              fluid(maxWidth: 1920) {
                ...GatsbySanityImageFluid
              }
            }
          }
          renovations {
            _key
            _rawBody
            heroImage {
              asset {
                fluid(maxWidth: 450) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            images {
              asset {
                fluid(maxWidth: 1920) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            slug {
              current
            }
            title
          }
          title
        }
      }
    }
  }
`;

export default RenovationsPage;
