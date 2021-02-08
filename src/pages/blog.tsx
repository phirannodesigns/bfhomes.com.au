/* eslint-disable react/no-array-index-key */
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IImage } from 'gatsby-plugin-image';
import { matchSorter } from 'match-sorter';
import * as React from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

import { BGImageLeft, ContactSection, Layout, Post, SEO } from '../components';

function LatestNewsPage({ data }) {
  const newHomes = getImage(data.newHomes);
  return (
    <Layout>
      <SEO title="Latest News" />
      <Hero imageData={newHomes} />
      <LatestBlogs nodes={data.allSanityPost.nodes} />
      <ContactSection />
    </Layout>
  );
}

function Hero({ imageData }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
    </div>
  );
}

interface LatestBlogsProps {
  nodes: {
    _publishedAt: string;
    _rawBody: [];
    categories: {
      title: string;
      id: string;
    }[];
    id: string;
    imageAltText?: string;
    mainImage: {
      asset: {
        fluid: IImage;
      };
    };
    publishedAt: string;
    slug: {
      current: string;
    };
    title: string;
  }[];
}

function LatestBlogs({ nodes }: LatestBlogsProps) {
  // Pad out posts to test pagination
  const posts = React.useMemo(() => nodes.map((n, i) => ({ ...n, index: i })), [
    nodes,
  ]);

  // State for pagination
  const [index, setIndex] = React.useState(0);

  const INCREMENTOR = 6;

  // Filter posts from search input
  const [searchQuery, setSearchQuery] = React.useState('');

  // Update searchQuery value whenever input changes
  function handleSearchQuery(event) {
    setIndex(0);
    setSearchQuery(event.target.value);
  }

  const ALL_CATEGORIES = 'All';

  // State for filtering posts from select menu
  const [filter, setFilter] = React.useState(ALL_CATEGORIES);

  // Update filter value whenever select changes
  function handleFilter(event) {
    setIndex(0);
    setFilter(event.target.value);
  }

  // Filter posts from select menu
  const [categories, setCategories] = React.useState([]);
  React.useMemo(() => {
    const cat = [];
    // Push all category titles to cat array
    posts.map((post) =>
      post.categories.map((category) => cat.push(category.title))
    );
    // Filter duplicates and sort alphabetically
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    setCategories([...new Set(cat)].sort((a, b) => a.localeCompare(b)));
  }, [posts]);

  // Filter by tag
  const postsFilteredByCategory = React.useMemo(
    () =>
      filter === ALL_CATEGORIES
        ? posts
        : posts.filter((post) =>
            post.categories.some(({ title }) => title === filter)
          ),
    [filter, posts]
  );

  const filteredPosts = matchSorter(postsFilteredByCategory, searchQuery, {
    keys: ['title', (post) => post.categories.map((c) => c.title)],
  });

  return (
    <article className="text-white bg-brand-blue">
      <BGImageLeft>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="border-white heading-2">
                Check Out Our Latest Blogs
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 text-brand-blue">
              <input
                onChange={handleSearchQuery}
                value={searchQuery}
                type="text"
                placeholder="Search"
                className="font-medium transition duration-150 ease-in-out opacity-50 placeholder-uppercase placeholder-brand-blue focus:opacity-100"
              />
              <select
                onChange={handleFilter}
                value={filter}
                className="font-medium uppercase transition duration-150 ease-in-out opacity-50 focus:opacity-100"
              >
                <option value={ALL_CATEGORIES}>Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul className="grid mt-10 gap-x-10 gap-y-16 lg:grid-cols-3">
            {(searchQuery === '' ? postsFilteredByCategory : filteredPosts)
              .slice(index * INCREMENTOR, index * INCREMENTOR + INCREMENTOR)
              .map((post) => (
                <Post key={post.id} post={post} />
              ))}
          </ul>
          <div className="flex items-center justify-center mt-20 space-x-2">
            <button
              type="button"
              onClick={() =>
                index <= 0 ? null : setIndex((prevIndex) => prevIndex - 1)
              }
              className="p-1"
            >
              <span className="sr-only">Newer posts</span>
              <HiArrowLeft />
            </button>
            <ul className="flex space-x-2">
              {new Array(Math.ceil(filteredPosts.length / INCREMENTOR))
                .fill('')
                .map((_, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`
                      ${index === i && 'font-bold underline'}
                      p-1
                      `}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
            </ul>
            <button
              type="button"
              onClick={() =>
                index >= Math.ceil(filteredPosts.length / INCREMENTOR)
                  ? null
                  : setIndex((prevIndex) => prevIndex + 1)
              }
              className="p-1"
            >
              <span className="sr-only">Older posts</span>
              <HiArrowRight />
            </button>
          </div>
        </div>
      </BGImageLeft>
    </article>
  );
}

export const query = graphql`
  {
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
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
  }
`;

export default LatestNewsPage;
