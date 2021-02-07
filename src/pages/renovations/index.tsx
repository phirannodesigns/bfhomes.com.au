import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { ContactSection, Hero, Layout, SEO } from '../../components';

function RenovationsPage({ data }) {
  const renovationsHero = getImage(data.renovationsHero);
  const bathroom = getImage(data.bathroom);
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title="Renovations" />
      <Hero imageData={renovationsHero} />
      <HouseExtensions imageData={renovationsHero} bathroom={bathroom} />
      <OutdoorLivingAreas imageData={renovationsHero} />
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
              <p>{copy}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex">
              <GatsbyImage
                image={imageData}
                alt=""
                className="flex-1 w-full h-full max-w-sm mx-auto"
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

const image = '../images/new-homes.jpg';

function HouseExtensions({ imageData, bathroom }) {
  const houseExtensions = [
    {
      heading: 'Bathrooms',
      copy:
        'If your bathroom is old, cramped, or frequently occupied, extending your home with a new bathroom is a popular choice to gain more functionality. We can extend your existing bathroom or build new bathrooms and/or ensuites that are close to your current floorplan. Ask us how we can extend your bathroom today.',
      slug: '/renovations/house-extensions/#bathrooms',
      image: bathroom,
    },
    {
      heading: 'Kitchens',
      copy:
        'Getting more from your kitchen is easy with Bruen Family Homes. We can extend your kitchen, increasing the space between appliances, benches, and sinks. We can design a new open plan living area, depending on how your home is structured. Talk to us about getting more from your kitchen with a Bruen quality extension.',
      slug: '/renovations/house-extensions/#kitchens',
      image,
    },
  ];
  return (
    <Service
      copy="House extensions give you more room to move and can be an economical and functional way to breathe more life into your home instead of looking elsewhere. Bruen Family Homes have over 30 years of designing and building house extensions by constructing using vacant land or up into a second storey. We can build all types of extensions from living areas, bathrooms, kitchens, bedrooms, and study or office areas. We perform large or small extensions, including ones that require major structural works. We consult with you to make the most from your house extension."
      title="House Extensions"
      services={houseExtensions}
      imageData={imageData}
    />
  );
}

const outdoorLivingAreas = [
  {
    heading: 'Decks',
    copy:
      'Always a winner no matter the time of year, a polished and roomy deck is a great compliment to any house. We can build from scratch or renovate your existing deck in a variety of materials and timber finishes. We help you design a deck that suits your lifestyle adding space for barbeques, furniture, and more.',
    slug: '/renovations/outdoor-living-areas/#decks',
    image,
  },
  {
    heading: 'Flyover Roofs',
    copy:
      'Also known as patio roofs, a flyover roof is a functional and economical way to extend your living area. With higher ceilings and greater ventilation, a flyover roof is a great and easy way to make the outdoors a part of the everyday. We can design and build a free-standing or attached roof depending on your wants and needs.',
    slug: '/renovations/outdoor-living-areas/#flyover-roofs',
    image,
  },
];

function OutdoorLivingAreas({ imageData }) {
  return (
    <Service
      copy="Whether you’re looking to accommodate decks, built-in barbecues, flyover roofs, pools, landscaping, or alfresco areas – we can help you achieve your personalised vision for outdoor living and entertaining.

      With over 30 years of experience, Bruen Family Homes have designed and built dozens of outdoor living areas that are economical and comfortable. We design around your needs for entertaining guests, taking advantage of NSW North Coast’s weather, or for maximum privacy."
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
    renovationsHero: file(relativePath: { eq: "renovations-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    bathroom: file(relativePath: { eq: "bathroom.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    allSanityRenovations {
      nodes {
        id
        renovation {
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
        }
      }
    }
  }
`;

export default RenovationsPage;
