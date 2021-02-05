import React from 'react';
import { graphql, Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { GatsbyImage as NewImage, getImage } from 'gatsby-plugin-image';
import { useLocation } from '@reach/router';
import SanityBlockContent from '@sanity/block-content-to-react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

import { Layout, SEO, BGImageRight, ContactSection } from '../components';
import bgLeft from '../images/bg-left.svg';

function PostTemplate({ data, pageContext }) {
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title={data.sanityPost.title} />
      <Hero imageData={data.sanityPost.mainImage?.asset?.fluid} />
      <div className="relative grid w-full grid-cols-1 px-0 mx-auto lg:grid-cols-3">
        <BlogPost post={data.sanityPost} pageContext={pageContext} />
        <RelatedPosts post={data.sanityPost} posts={data.allSanityPost.nodes} />
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
  const { origin } = useLocation();
  return (
    <article
      style={{ backgroundImage: `url(${bgLeft})` }}
      className="relative w-full col-span-2 px-6 py-24 mx-auto text-white xl:px-24 max-w-7xl bg-brand-blue"
    >
      <h1 className="border-white heading-2">{post.title}</h1>
      <div className="mt-12 prose text-white">
        <SanityBlockContent blocks={post._rawBody} />
      </div>
      <h2 className="text-xl font-bold text-brand-teal">{post.author.name}</h2>
      <div className="font-medium text-brand-teal">
        <time>{post.publishedAt}</time>
        <span className="mx-3">|</span>
        <button
          onClick={() => {
            if (navigator?.share) {
              navigator.share({
                url: `${origin}/posts/${post.slug.current}/`,
              });
            } else if (typeof window !== 'undefined') {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${origin}/posts/${post.slug.current}/`
              );
            } else return;
          }}
        >
          Share
        </button>
      </div>
      <div className="flex justify-between w-full mt-8">
        {pageContext.prev && (
          <Link
            to={`/posts/${pageContext.prev}`}
            className="inline-flex items-center flex-shrink-0 space-x-1 text-xl text-white border-white button"
          >
            <HiArrowLeft className="text-base" />
            <span>Previous Post</span>
          </Link>
        )}
        {pageContext.next && (
          <Link
            to={`/posts/${pageContext.next}`}
            className="inline-flex items-center flex-shrink-0 ml-auto space-x-1 text-xl text-white border-white button"
          >
            <span>Next Post</span>
            <HiArrowRight className="text-base" />
          </Link>
        )}
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
        <h3 className="flex items-start space-x-2 text-2xl border-none heading-2 text-brand-teal">
          <span>{post.title}</span>
          <span className="flex items-center">
            &#8203;
            <HiArrowRight aria-hidden className="inline-block text-lg" />
          </span>
        </h3>
      </Link>
      <div className="mt-1 font-medium prose text-brand-blue">
        <SanityBlockContent blocks={post._rawBody.slice(0, 1)} />
      </div>
      <div className="mt-1 font-medium text-brand-teal">
        <time>{post.publishedAt}</time>
        <span className="mx-3">|</span>
        <button
          onClick={() => {
            if (navigator?.share) {
              navigator.share({
                url: `${origin}/posts/${post.slug.current}/`,
              });
            } else if (typeof window !== 'undefined') {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${origin}/posts/${post.slug.current}/`
              );
            } else return;
          }}
        >
          Share
        </button>
      </div>
    </article>
  );
}

function RelatedPosts({ post, posts }) {
  const postsMinusCurrent = posts.filter(
    (p) => p.slug.current !== post.slug.current
  );

  return (
    <div className="hidden px-12 py-24 bg-white lg:px-6 lg:block lg:col-span-1">
      <div className="space-y-12">
        <div>
          <h2 className="heading-2 text-brand-blue border-brand-blue">
            Recent posts
          </h2>
          {postsMinusCurrent.slice(0, 4).map((p, i) => (
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
      <div className="absolute inset-0 flex">
        <NewImage image={imageData} alt="" className="flex-1" />
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
    allSanityPost(sort: { order: DESC, fields: publishedAt }) {
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
    sanityPost(slug: { current: { eq: $slug } }) {
      _rawBody(resolveReferences: { maxDepth: 50 })
      author {
        name
      }
      categories {
        title
        id
      }
      id
      imageAltText
      mainImage {
        asset {
          fluid(maxWidth: 750) {
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
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

export default PostTemplate;
