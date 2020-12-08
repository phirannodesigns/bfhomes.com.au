import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage as NewImage, getImage } from "gatsby-plugin-image";
import GatsbyImage, { FluidObject } from "gatsby-image";
import { matchSorter } from "match-sorter";
import SanityBlockContent from "@sanity/block-content-to-react";
import { HiArrowRight } from "react-icons/hi";

import { Layout, SEO, ContactSection, BGImageLeft } from "../components";

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
  return <NewImage image={imageData} alt="" />;
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
        fluid: FluidObject;
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
  // Filter posts from search input
  const [searchQuery, setSearchQuery] = React.useState("");

  // Update searchQuery value whenever input changes
  function handleSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  // State for filtering posts from select menu
  const [filter, setFilter] = React.useState("All");

  // Update filter value whenever select changes
  function handleFilter(event) {
    setFilter(event.target.value);
  }

  // Filter posts from select menu
  const [categories, setCategories] = React.useState([]);
  React.useMemo(() => {
    const cat = [];
    // Push all category titles to cat array
    nodes.map((post) => {
      return post.categories.map((category) => cat.push(category.title));
    });
    // Filter duplicates and sort alphabetically
    setCategories([...new Set(cat)].sort((a, b) => a.localeCompare(b)));
  }, [nodes]);

  // Filter by tag
  const filteredPosts = React.useMemo(
    () =>
      filter === "All"
        ? nodes
        : nodes.filter((post) => {
            return post.categories.some(({ title }) => title === filter);
          }),
    [filter, nodes]
  );

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
                <option value="All">Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul className="grid mt-10 gap-x-10 gap-y-16 lg:grid-cols-3">
            {matchSorter(filteredPosts, searchQuery, {
              keys: ["title"],
            }).map((post) => (
              <li key={post.id}>
                <div className="relative h-0 aspect-w-4 aspect-h-3">
                  <div className="absolute inset-0 flex">
                    <GatsbyImage
                      fluid={post.mainImage.asset.fluid}
                      alt=""
                      className="flex-1 shadow-lg"
                    />
                  </div>
                </div>
                <h3 className="flex items-center mt-5 space-x-2 text-2xl font-bold uppercase text-brand-teal">
                  <span>{post.title}</span>
                  <HiArrowRight aria-hidden className="text-lg" />
                </h3>
                <div className="font-medium prose text-white clamp-3">
                  <SanityBlockContent blocks={post._rawBody.slice(0, 1)} />
                </div>
                <div className="mt-1 font-medium text-brand-teal">
                  <time dateTime={post._publishedAt}>{post.publishedAt}</time>
                  <span className="mx-3">|</span>
                  <a href="#">Share</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BGImageLeft>
    </article>
  );
}

export const graphqlQuery = graphql`
  query MyQuery {
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
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 1080)
      }
    }
  }
`;

export default LatestNewsPage;
