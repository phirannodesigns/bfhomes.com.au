import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { GatsbyImage as NewImage, getImage } from 'gatsby-plugin-image';
import { HiArrowRight } from 'react-icons/hi';

import { Layout, SEO, ContactSection, BGImageLeft } from '../components';

function LatestNewsPage({
  data: {
    allSanityPost: { nodes },
  },
  data,
}) {
  /**
   * Filter posts from search input
   */
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState(nodes);

  console.log(data);
  const newHomes = getImage(data.newHomes);

  // Filter search results from search results
  useMemo(() => {
    const filteredPosts = nodes.filter(
      (node) =>
        node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.categories.find(
          ({ title }) =>
            title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )
    );
    setPosts(filteredPosts);
  }, [nodes, searchQuery]);

  /**
   * Filter posts from select menu
   */
  const [categories, setCategories] = useState([]);

  // State for filtering posts from select menu
  const [filter, setFilter] = useState('All');

  // Get unique categories
  useMemo(() => {
    const cat = [];
    // Push all category titles to cat array
    posts.map((post) => {
      return post.categories.map((category) => cat.push(category.title));
    });
    // Filter duplicates and sort alphabetically
    setCategories([...new Set(cat)].sort((a, b) => a.localeCompare(b)));
  }, [posts]);

  // Filter by tag
  const filtered = useMemo(
    () =>
      filter === 'All'
        ? posts
        : posts.filter((post) => {
            return post.categories.some(({ title }) => title === filter);
          }),
    [filter, posts]
  );

  return (
    <Layout>
      <SEO title="Latest News" />
      <Hero imageData={newHomes} />
      <article className="px-4 space-y-12 sm:px-6 lg:px-8 bg-brand-blue">
        <BGImageLeft>
          <div className="mx-auto text-center">
            <h1 className="heading-1">Latest news.</h1>
            <div className="grid max-w-2xl mx-auto mt-4 gap-x-6 gap-y-10 sm:grid-cols-2">
              <div className="relative">
                <label htmlFor="search-input">
                  <span className="absolute inset-y-0 inline-flex items-center left-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <input
                    id="search-input"
                    name="search-input"
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 rounded-full form-input"
                  />
                </label>
              </div>
              <div>
                <select
                  id="category-filter"
                  name="category-filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full pl-4 rounded-full form-select"
                >
                  <option value="All">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="relative z-10 grid w-full max-w-screen-xl grid-cols-1 gap-12 px-4 py-20 mx-auto sm:grid-cols-2 mt-28 sm:mt-40 lg:grid lg:grid-cols-3 lg:gap-12 sm:px-6 lg:px-8">
            {searchQuery !== '' && !posts.length ? (
              <p className="text-center">
                No results found! Please try a different search.
              </p>
            ) : (
              <ul>
                {filtered.map((post) => {
                  return (
                    <li key={post.id}>
                      <GatsbyImage
                        fluid={post.mainImage.asset.fluid}
                        alt=""
                        className="shadow-lg"
                      />
                      <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
                        <span>{post.title}</span>
                        <HiArrowRight aria-hidden className="text-lg" />
                      </h3>
                      <div className="font-medium prose text-white">
                        <p className="clamp-3">
                          {post._rawBody.map((i) => `${i.children[0].text} `)}
                        </p>
                      </div>
                      <div className="mt-1 font-medium text-brand-teal">
                        <time>{post.publishedAt}</time>
                        <span className="mx-3">|</span>
                        {/* // TODO: Make this link work when posts have URL */}
                        <a href="#">Share</a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </BGImageLeft>
      </article>
      <ContactSection />
    </Layout>
  );
}

function Hero({ imageData }) {
  return <NewImage image={imageData} alt="" />;
}

LatestNewsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const graphqlQuery = graphql`
  query MyQuery {
    allSanityPost(sort: { order: DESC, fields: publishedAt }) {
      nodes {
        _createdAt(formatString: "MMMM DD, YYYY")
        _rawBody(resolveReferences: { maxDepth: 50 })
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
  }
`;

export default LatestNewsPage;
