const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// create slug for each Markdown post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })
    // console.log(slug)
    // console.log(slug.replace(/^\/|\/$/g, "")) // remove first/last slahes
    // console.log(slug.replace(/\/$/g, "")) // remove trailing(last) slash

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      work: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.work.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/workTemplate.js`),
      context: {
        // context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
        slugNoSlash: node.fields.slug.replace(/^\/|\/$/g, ""), // this is for getting images in each folder/post
      },
    })
  })
}
