const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
    const res = await graphql(`
      query{
        allContentfulBlogPost{
            edges{
              node{
                title
                subtitle
                author
                slug
                publishDate
                images{
                  fluid{
                    src
                  }
                }
                body{
                  raw
                }
              }
            }
          }
        }
      `)
    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}