const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityRenovations {
        nodes {
          renovation {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  // const result = await graphql(`
  //   {
  //     allSanityPost {
  //       nodes {
  //         slug {
  //           current
  //         }
  //       }
  //     }
  //   }
  // `);

  if (result.errors) {
    throw result.errors;
  }

  // Iterate over all renovations and create a new page using a template
  const renovations = result.data.allSanityRenovations.nodes[0].renovation;
  renovations.forEach((reno) => {
    const slug = reno.slug.current;
    createPage({
      path: `/renovations/${slug}`,
      component: path.resolve(`./src/templates/renovations.tsx`),
      context: {
        slug,
      },
    });
  });

  // // Iterate over all posts and create a new page using a template
  // const posts = result.data.allSanityPost.nodes;
  // posts.forEach((post, index) => {
  //   const slug = post.slug.current;
  //   const prev = index === 0 ? null : posts[index - 1].slug.current;
  //   const next =
  //     index === posts.length - 1 ? null : posts[index + 1].slug.current;
  //   createPage({
  //     path: `/posts/${slug}`,
  //     component: path.resolve(`./src/templates/blog-post.tsx`),
  //     context: {
  //       slug,
  //       prev,
  //       next,
  //     },
  //   });
  // });
};
