import React from "react";
import { graphql, Link } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import GatsbyImage from "gatsby-image";
import { GatsbyImage as NewImage, getImage } from "gatsby-plugin-image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import SanityBlockContent from "@sanity/block-content-to-react";

import { Layout, SEO, BGImageRight, ContactSection } from "../components";
import bgLeft from "../images/bg-left.svg";
import { useLocation } from "@reach/router";

function PostTemplate({ data, pageContext }) {
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title={data.sanityPost.title} />
      <Hero imageData={data.sanityPost.mainImage?.asset?.fluid} />
      <div className="relative grid w-full grid-cols-1 px-0 mx-auto lg:grid-cols-3">
        <BlogPost post={data.sanityPost} pageContext={pageContext} />
        <RelatedPosts post={data.sanityPost} />
      </div>
      <BGImageRight>
        <WhoAreWe imageData={whoAreWe} />
      </BGImageRight>
      <ContactSection />
    </Layout>
  );
}

function Hero({ imageData }) {
  return <GatsbyImage fluid={imageData} alt="" />;
}

function BlogPost({ post, pageContext }) {
  return (
    <article
      style={{ backgroundImage: `url(${bgLeft})` }}
      className="relative w-full col-span-2 px-6 py-24 mx-auto text-white xl:px-24 max-w-7xl bg-brand-blue"
    >
      <h1 className="border-white heading-2">{post.title}</h1>
      <div className="mt-12 prose text-white">
        <BlockContent blocks={post._rawBody} />
      </div>
      <h2 className="text-xl font-bold text-brand-teal">{post.author.name}</h2>
      <div className="font-medium text-brand-teal">
        <time>{post.publishedAt}</time>
        <span className="mx-3">|</span>
        {/* // TODO: Make this link work when articles have URL */}
        <a href="#">Share</a>
      </div>
      <div className="flex justify-between w-full mt-8">
        <Link
          to={`/blogs/${pageContext.prev}`}
          className="inline-flex items-center flex-shrink-0 space-x-1 text-xl text-white border-white button"
        >
          <HiArrowLeft className="text-base" />
          <span>Previous Post</span>
        </Link>
        <Link
          to={`/blogs/${pageContext.next}`}
          className="inline-flex items-center flex-shrink-0 space-x-1 text-xl text-white border-white button"
        >
          <span>Next Post</span>
          <HiArrowRight className="text-base" />
        </Link>
      </div>
    </article>
  );
}

function Post({ post }) {
  const { origin } = useLocation();
  return (
    <article>
      <Link aria-hidden tabIndex={-1} to={`/posts/${post.slug.current}`}>
        <GatsbyImage
          fluid={post.mainImage?.asset?.fluid}
          alt=""
          className="mt-12 shadow-lg"
        />
      </Link>
      <Link to={`/posts/${post.slug.current}`} className="block mt-5 ">
        <h3 className="text-2xl border-none heading-2 text-brand-teal">
          <span>{post.title}</span>
          <HiArrowRight aria-hidden className="inline-block text-lg" />
        </h3>
      </Link>
      <div className="mt-1 font-medium prose text-brand-blue">
        <SanityBlockContent blocks={post._rawBody.slice(0, 1)} />
      </div>
      <div className="mt-1 font-medium text-brand-teal">
        <time>{post.publishedAt}</time>
        <span className="mx-3">|</span>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${origin}/posts/${post.slug.current}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share
        </a>
      </div>
    </article>
  );
}

function RelatedPosts({ post }) {
  const posts = [{ ...post }];
  return (
    <div className="hidden px-12 py-24 bg-white lg:px-6 lg:block lg:col-span-1">
      <div className="sticky space-y-12">
        <div>
          <h2 className="heading-2 text-brand-blue border-brand-blue">
            Other related posts
          </h2>
          {posts.concat(posts).map((p, i) => (
            <Post key={i} post={p} />
          ))}
        </div>
        <div>
          <h2 className="heading-2 text-brand-blue border-brand-blue">
            Top posts
          </h2>
          {posts.concat(posts).map((p, i) => (
            <Post key={i} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WhoAreWe({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="sticky top-0">
        <div className="absolute inset-0 flex">
          <NewImage image={imageData} alt="" className="flex-1" />
        </div>
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto sm:px-6 lg:px-8">
        <h2 className="border-white heading-2">Who Are We?</h2>
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
