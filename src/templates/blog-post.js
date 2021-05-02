import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
      title
      subtitle
      author
      publishDate
      body{
        raw
      }
      images{
        fluid{
          src
        }
      }
    }
  }
  `

const BlogPostTemplate = (props) => {
  const { author, body, images, title, subtitle, publishDate } = props.data.contentfulBlogPost
  const bodyData = JSON.parse(body.raw)
  const actualBody = bodyData.content[0].content[0].value

  return (
    <Layout >
      <>
        <Head title={title} />
        <h1>Title: {title}</h1>
        <h4>Sub Title: {subtitle}</h4>
        <small>Author: {author}</small>
        <br />
        <small>Published Date: {publishDate}</small>
        <br />
        <img src={images.fluid.src} alt="" width="700px" height="500px" />
        <p>{actualBody}</p>
      </>
    </Layout>
  )
}

export default BlogPostTemplate
