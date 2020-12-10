const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Iterate over all posts and create a new page using a template
  const posts = result.data.allSanityPost.nodes;
  posts.forEach((post, index) => {
    const slug = post.slug.current;
    const prev =
      index === 0
        ? posts[posts.length - 1].slug.current
        : posts[index - 1].slug.current;
    const next =
      index === posts.length - 1
        ? posts[0].slug.current
        : posts[index + 1].slug.current;
    createPage({
      path: `/blogs/${slug}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        slug,
        prev,
        next,
      },
    });
  });
};
