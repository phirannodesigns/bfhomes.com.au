import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { HiArrowRight } from 'react-icons/hi';
import { IoStar, IoStarOutline } from 'react-icons/io5';

import {
  Layout,
  SEO,
  BGImageRight,
  BGImageLeft,
  ContactSection,
  Post,
} from '../components';

function IndexPage({ data }) {
  const newHomes = getImage(data.newHomes);
  const howCanWeHelp = getImage(data.howCanWeHelp);
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title="Port Macquarie Home Builders - Renovations - Outdoor Living" />
      <Hero imageData={newHomes} />
      <Services imageData={newHomes} />
      <BGImageRight>
        <HowCanWeHelp imageData={howCanWeHelp} />
        <WhoAreWe imageData={whoAreWe} />
      </BGImageRight>
      <Feedback />
      <LatestNews imageData={newHomes} posts={data.allSanityPost.nodes} />
      <ContactSection />
    </Layout>
  );
}

// TODO Replace hero image with video
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

// TODO Source this data from Sanity
const services = [
  {
    heading: 'New Homes',
    copy:
      'Bruen Family Homes design and construct quality homes for families throughout Port Macquarie and NSW North Coast. We deliver on time, on budget, and aim for      complete satisfaction in new builds, extensions, and renovations that are practical, stylish, and liveable.',
    slug: '/homes/',
    image: '../images/new-homes.jpg',
  },
  {
    heading: 'Renovations',
    copy:
      'Bruen Family Homes are Port Macquarie’s specialists in high quality renovations, second storey additions and extensions. Whether you need substantial structural    modifications or interior renovations, your family can rely on Bruen Family Homes to get the job done on time and on budget.',
    slug: '/renovations/',
    image: '../images/new-homes.jpg',
  },
  {
    heading: 'Outdoors',
    copy:
      'Barbecues, al fresco dining, and lazy days in your backyard can be yours with outdoor living and dining areas designed and built by Bruen Family Homes. We can help you achieve your personalised vision for outdoor living and entertaining.',
    slug: '/renovations/#outdoor-living-areas',
    image: '../images/new-homes.jpg',
  },
];

function Services({ imageData }) {
  return (
    <ul className="grid w-full gap-12 px-4 mx-auto transform -translate-y-12 sm:px-6 lg:px-8 lg:grid-cols-3 lg:-translate-y-24">
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
  );
}

function HowCanWeHelp({ imageData }) {
  return (
    <article className="text-white bg-brand-blue">
      <div className="relative z-10 grid w-full max-w-screen-xl gap-4 px-4 py-20 mx-auto sm:px-6 lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="border-white heading-2">How Can We Help?</h2>
          <div className="mt-5 prose text-white">
            <p>
              Bruen Family Homes are here to help you build your dream home. We
              sit down with you to design your new home, renovation, or outdoor
              area, giving you options that are practical, look good, are
              comfortable, and stand the test of time. When you work with Bruen
              Family Homes, you become part of our family. We manage the project
              from start to finish. We’re always on hand to answer all your
              questions, liaise with subcontractors, designers, and architects,
              and maintain open communication so you can have a worry-free
              build. We respond promptly to all your requests to ensure on-time
              delivery.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 mt-8 text-xl font-medium max-w-prose">
            {[
              {
                label: 'Project Management',
                colour: 'text-brand-teal',
              },
              {
                label: 'Liasing With Contractors',
                colour: 'text-blue-400',
              },
              {
                label: 'Construction',
                colour: 'text-gray-400',
              },
              {
                label: 'Quality Control',
                colour: 'text-brand-teal',
              },
              {
                label: 'Health & Safety',
                colour: 'text-blue-400',
              },
              {
                label: 'Tailored Contracts',
                colour: 'text-gray-400',
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
          <p className="mt-8">
            <Link
              to="/contact-us/"
              className="inline-flex items-center px-6 py-4 space-x-3 font-medium leading-none tracking-wider uppercase border text-brand-teal border-brand-teal"
            >
              <span>Learn more</span>
              <HiArrowRight className="text-lg" />
            </Link>
          </p>
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
    </article>
  );
}

function WhoAreWe({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto sm:px-6 lg:px-8">
        <h2 className="inline-block text-2xl font-bold uppercase border-b-2 border-white">
          Who Are We?
        </h2>
        <h3 className="mt-5 text-5xl uppercase">Get To Know More About Us</h3>
        <p className="mt-5">
          <Link
            to="/about-us/"
            className="inline-flex tracking-wider items-center space-x-3 px-4 py-2.5 text-sm font-medium uppercase border text-white border-white"
          >
            <span className="whitespace-nowrap">Find out more</span>
            <HiArrowRight className="text-lg" />
          </Link>
        </p>
      </div>
    </article>
  );
}

const reviews = [
  {
    name: 'Bree Knowles',
    text:
      'Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    name: 'Hannah Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    name: 'Jonathon Kin',
    text:
      'Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
];

function Feedback() {
  return (
    <article className="text-brand-blue">
      <div className="w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="flex">
          <h2 className="inline-block mx-auto text-2xl font-bold text-center uppercase border-b-2 border-brand-blue">
            Feedback From Our Clients
          </h2>
        </div>
        <ul className="grid gap-4 mt-8 text-center lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.name}>
              <blockquote>
                <p className="font-medium">{review.text}</p>
                <footer>
                  <p className="mt-5 font-bold">{review.name}</p>
                  <div className="flex items-center justify-center space-x-1 text-2xl text-brand-teal">
                    {Array(review.rating)
                      .fill('')
                      .map((_, index) => (
                        <IoStar key={index} className="w-6 h-6" />
                      ))}
                    {Array(5 - review.rating)
                      .fill('')
                      .map((_, index) => (
                        <IoStarOutline key={index} className="w-6 h-6" />
                      ))}
                  </div>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function LatestNews({ posts }) {
  return (
    <article className="text-white bg-brand-blue">
      <BGImageLeft>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div>
            <h2 className="border-white heading-2">
              Check Out Our Latest News
            </h2>
            <ul className="grid gap-10 mt-10 lg:grid-cols-3">
              {posts.map((post) => (
                <Post post={post} />
              ))}
            </ul>
          </div>
        </div>
      </BGImageLeft>
    </article>
  );
}

export const query = graphql`
  query {
    allSanityPost(sort: { order: DESC, fields: publishedAt }, limit: 3) {
      nodes {
        _publishedAt: publishedAt
        _rawBody
        categories {
          title
          id
        }
        id
        imageAltText
        mainImage {
          asset {
            fluid(maxWidth: 450) {
              ...GatsbySanityImageFluid
            }
          }
        }
        publishedAt(formatString: "MMMM DD, YYYY")
        slug {
          current
        }
        title
      }
    }
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 1080)
      }
    }
    howCanWeHelp: file(relativePath: { eq: "how-can-we-help.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 400, maxHeight: 600)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 820)
      }
    }
  }
`;

export default IndexPage;
