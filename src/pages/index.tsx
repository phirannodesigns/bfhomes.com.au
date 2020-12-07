import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HiArrowRight } from "react-icons/hi";
import { IoStar, IoStarOutline } from "react-icons/io5";

import {
  Layout,
  SEO,
  BGImageRight,
  BGImageLeft,
  ContactSection,
} from "../components";

function IndexPage({ data }) {
  const newHomes = getImage(data.newHomes);
  const howCanWeHelp = getImage(data.howCanWeHelp);
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero imageData={newHomes} />
      <Services imageData={newHomes} />
      <BGImageRight>
        <HowCanWeHelp imageData={howCanWeHelp} />
        <WhoAreWe imageData={whoAreWe} />
      </BGImageRight>
      <Feedback />
      <LatestNews imageData={newHomes} />
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
    heading: "New Homes",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    slug: "/services/new-homes/",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Renovations",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
    slug: "/services/renovations/",
    image: "../images/new-homes.jpg",
  },
  {
    heading: "Outdoors",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod incididunt an labore et dolore magna.",
    slug: "/services/outdoors/",
    image: "../images/new-homes.jpg",
  },
];

function Services({ imageData }) {
  return (
    <ul className="grid w-full gap-12 px-4 mx-auto transform -translate-y-12 sm:px-6 lg:px-8 lg:grid-cols-3 lg:-translate-y-1/3">
      {services.map((service) => (
        <li key={service.slug}>
          <GatsbyImage image={imageData} alt="" className="shadow-lg" />
          <Link to={service.slug}>
            <h2 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-blue">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna et aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 mt-8 text-xl font-medium max-w-prose">
            {[
              {
                label: "Project Management",
                colour: "text-brand-teal",
              },
              {
                label: "Project Management",
                colour: "text-blue-400",
              },
              {
                label: "Tailored Contracts",
                colour: "text-gray-400",
              },
              {
                label: "Tailored Contracts",
                colour: "text-brand-teal",
              },
              {
                label: "Construction",
                colour: "text-blue-400",
              },
              {
                label: "Construction",
                colour: "text-gray-400",
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
              to="/"
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
        <h3 className="mt-4 text-5xl uppercase">Get To Know More About Us</h3>
        <p className="mt-4">
          <Link
            to="/"
            className="inline-flex tracking-wider items-center space-x-3 px-4 py-2.5 text-sm font-medium uppercase border text-white border-white"
          >
            <span className="whitespace-nowrap">Find out more about us</span>
            <HiArrowRight className="text-lg" />
          </Link>
        </p>
      </div>
    </article>
  );
}

const reviews = [
  {
    name: "Bree Knowles",
    text:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Hannah Smith",
    text:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Jonathon Kin",
    text:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
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
                      .fill("")
                      .map((_, index) => (
                        <IoStar key={index} className="w-6 h-6" />
                      ))}
                    {Array(5 - review.rating)
                      .fill("")
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

// TODO: Source this data from CMS
const articles = [
  {
    heading: "Buying Land Packages",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    date: "January 3rd, 2020",
  },
  {
    heading: "Build New Vs Renovate",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua",
    date: "April 15th, 2020",
  },
  {
    heading: "Minalism Interiors",
    copy:
      "Lorem ipsum dolor sit amet, consectetur a ut dipiscing elit, sed do eiusmod incididunt an labore et dolore magna",
    date: "September 21 st, 2020",
  },
];

function LatestNews({ imageData }) {
  return (
    <article className="text-white bg-brand-blue">
      <BGImageLeft>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div>
            <h2 className="border-white heading-2">
              Check Out Our Latest News
            </h2>
            <ul className="grid gap-10 mt-10 lg:grid-cols-3">
              {articles.map((article) => (
                <li key={article.date}>
                  <GatsbyImage image={imageData} alt="" className="shadow-lg" />
                  <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
                    <span>{article.heading}</span>
                    <HiArrowRight aria-hidden className="text-lg" />
                  </h3>
                  <div className="font-medium prose text-white">
                    <p className="clamp-3">{article.copy}</p>
                  </div>
                  <div className="mt-1 font-medium text-brand-teal">
                    <time>{article.date}</time>
                    <span className="mx-3">|</span>
                    {/* // TODO: Make this link work when articles have URL */}
                    <a href="#">Share</a>
                  </div>
                </li>
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
