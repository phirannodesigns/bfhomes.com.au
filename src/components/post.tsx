import { useLocation } from '@reach/router';
import SanityBlockContent from '@sanity/block-content-to-react';
import { Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { HiArrowRight } from 'react-icons/hi';

interface IPost {
  post: {
    mainImage: {
      asset: {
        fluid: FluidObject;
      };
    };
    slug: {
      current: string;
    };
    title: string;
    _rawBody: [];
    _publishedAt: string;
    publishedAt: string;
  };
}

function Post({ post }: IPost): React.ReactElement {
  const { origin } = useLocation();
  return (
    <article>
      <Link
        aria-hidden
        tabIndex={-1}
        to={`/posts/${post.slug.current}`}
        className="block"
      >
        <div className="relative h-0 aspect-w-4 aspect-h-3">
          <div className="absolute inset-0 flex">
            <GatsbyImage
              fluid={post.mainImage.asset.fluid}
              alt=""
              className="flex-1 shadow-lg"
            />
          </div>
        </div>
      </Link>
      <Link to={`/posts/${post.slug.current}`} className="inline-block mt-5">
        <h3 className="flex items-start space-x-2 text-2xl font-bold uppercase text-brand-teal">
          <span>{post.title}</span>
          <span className="flex items-center">
            &#8203;
            <HiArrowRight aria-hidden className="text-lg" />
          </span>
        </h3>
      </Link>
      <div className="font-medium prose text-white clamp-3">
        <SanityBlockContent blocks={post._rawBody.slice(0, 1)} />
      </div>
      <div className="mt-1 font-medium text-brand-teal">
        <time dateTime={post._publishedAt}>{post.publishedAt}</time>
        <span className="mx-3">|</span>
        <button
          type="button"
          onClick={() => {
            if (navigator?.share) {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              navigator.share({
                url: `${origin}/posts/${post.slug.current}/`,
              });
            } else if (typeof window !== 'undefined') {
              // eslint-disable-next-line security/detect-non-literal-fs-filename
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${origin}/posts/${post.slug.current}/`
              );
            }
          }}
        >
          Share
        </button>
      </div>
    </article>
  );
}

export { Post };
