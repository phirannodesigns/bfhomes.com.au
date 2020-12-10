import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import GatsbyImage from 'gatsby-image';
import { GatsbyImage as NewImage, getImage } from 'gatsby-plugin-image';
import { HiArrowRight } from 'react-icons/hi';
import SanityBlockContent from '@sanity/block-content-to-react';

import {
  Layout,
  SEO,
  BGImageRight,
  BGImageLeft,
  ContactSection,
} from '../components';
import { FaRegBell } from 'react-icons/fa';

function PostTemplate({ data }) {
  const newHomes = getImage(data.newHomes);
  const whoAreWe = getImage(data.whoAreWe);

  return (
    <Layout>
      <SEO title={data.sanityPost.title} />
      <Hero imageData={newHomes} />
      <article className="relative grid w-full grid-cols-1 px-0 mx-auto lg:grid-cols-3">
        <div className="w-full col-span-2 px-6 py-24 mx-auto prose xl:px-24 max-w-7xl bg-brand-blue">
          <h1
            style={{ color: 'white' }}
            className="pb-2 mb-12 overflow-hidden uppercase border-b-4 border-white"
          >
            {data.sanityPost.title}
          </h1>
          <GatsbyImage
            className="mb-12"
            fluid={data.sanityPost.mainImage?.asset?.fluid}
            alt={data.sanityPost.imageAltText}
          />
          <BlockContent blocks={data.sanityPost._rawBody} />
          <h2 style={{ color: 'rgb(0, 180, 170)', marginBottom: '0rem' }}>
            {data.sanityPost.author.name}
          </h2>
          <div className="font-medium text-brand-teal">
            <time>{data.sanityPost.publishedAt}</time>
            <span className="mx-3">|</span>
            {/* // TODO: Make this link work when articles have URL */}
            <a
              style={{ color: 'rgb(0, 180, 170)' }}
              className="text-brand-teal"
              href="#"
            >
              Share
            </a>
          </div>
        </div>
        <div className="hidden px-12 py-24 bg-white lg:px-6 lg:block lg:col-span-1">
          <div className="mb-16">
            <h1 className="pb-2 overflow-hidden text-4xl font-bold text-center uppercase border-b-4 border-brand-blue text-brand-blue">
              Other related posts
            </h1>
          </div>
          <GatsbyImage
            fluid={data.sanityPost.mainImage?.asset?.fluid}
            alt=""
            className="shadow-lg"
          />
          <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
            <span>{data.sanityPost.title}</span>
            <HiArrowRight aria-hidden className="text-lg" />
          </h3>
          <div className="font-medium prose text-brand-blue">
            <SanityBlockContent blocks={data.sanityPost._rawBody.slice(0, 1)} />
          </div>
          <div className="mt-1 font-medium text-brand-teal">
            <time>{data.sanityPost.publishedAt}</time>
            <span className="mx-3">|</span>
            {/* // TODO: Make this link work when articles have URL */}
            <a href="#">Share</a>
          </div>
          <GatsbyImage
            fluid={data.sanityPost.mainImage?.asset?.fluid}
            alt=""
            className="mt-16 shadow-lg"
          />
          <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
            <span>{data.sanityPost.title}</span>
            <HiArrowRight aria-hidden className="text-lg" />
          </h3>
          <div className="font-medium prose text-brand-blue">
            <SanityBlockContent blocks={data.sanityPost._rawBody.slice(0, 1)} />
          </div>
          <div className="mt-1 font-medium text-brand-teal">
            <time>{data.sanityPost.publishedAt}</time>
            <span className="mx-3">|</span>
            {/* // TODO: Make this link work when articles have URL */}
            <a href="#">Share</a>
          </div>
          <div className="my-16">
            <h1 className="pb-2 overflow-hidden text-4xl font-bold text-center uppercase border-b-4 border-brand-blue text-brand-blue">
              Top posts
            </h1>
          </div>
          <GatsbyImage
            fluid={data.sanityPost.mainImage?.asset?.fluid}
            alt=""
            className="shadow-lg"
          />
          <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
            <span>{data.sanityPost.title}</span>
            <HiArrowRight aria-hidden className="text-lg" />
          </h3>
          <div className="font-medium prose text-brand-blue">
            <SanityBlockContent blocks={data.sanityPost._rawBody.slice(0, 1)} />
          </div>
          <div className="mt-1 font-medium text-brand-teal">
            <time>{data.sanityPost.publishedAt}</time>
            <span className="mx-3">|</span>
            {/* // TODO: Make this link work when articles have URL */}
            <a href="#">Share</a>
          </div>
          <GatsbyImage
            fluid={data.sanityPost.mainImage?.asset?.fluid}
            alt=""
            className="mt-16 shadow-lg"
          />
          <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
            <span>{data.sanityPost.title}</span>
            <HiArrowRight aria-hidden className="text-lg" />
          </h3>
          <div className="font-medium prose text-brand-blue">
            <SanityBlockContent blocks={data.sanityPost._rawBody.slice(0, 1)} />
          </div>
          <div className="mt-1 font-medium text-brand-teal">
            <time>{data.sanityPost.publishedAt}</time>
            <span className="mx-3">|</span>
            {/* // TODO: Make this link work when articles have URL */}
            <a href="#">Share</a>
          </div>
        </div>
      </article>
      <BGImageRight>
        <WhoAreWe imageData={whoAreWe} />
      </BGImageRight>
      <ContactSection />
    </Layout>
  );
}

function Hero({ imageData }) {
  return <NewImage image={imageData} alt="" />;
}

function WhoAreWe({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <NewImage image={imageData} alt="" className="flex-1" />
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

PostTemplate.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      _rawBody(resolveReferences: { maxDepth: 50 })
      slug {
        current
      }
      title
      author {
        name
      }
      id
      publishedAt(formatString: "MMMM DD, YYYY")
      imageAltText
      mainImage {
        asset {
          fluid(maxWidth: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
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

export default PostTemplate;
