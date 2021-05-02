import React from 'react'
import Layout from '../components/layout'
import { graphql, Link, useStaticQuery } from "gatsby"
import Head from '../components/head'

const Blogs = () => {
  const height = {
    width: "100%",
    height: "20vh",
    objectFit: "cover"
  }
  const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
          sort: {
            fields: publishDate
            order: DESC
          }
        ){
          edges{
            node{
              title
              slug
              publishDate(formatString: "MMMM Do, YYYY")  
              images{
                fluid{
                  src
                }
              }
            }
          }
        }
        }
    `)
  return (
    <Layout>
      <Head title="Blogs" />
      <div className="row">

        {data.allContentfulBlogPost.edges.map(edge => (
          <div className="col-md-4 col-12" key={Math.random() * 652345678}>
            <div className="card w-100" >
              <img style={height} className="card-img-top" src={edge.node.images.fluid.src} alt="" />
              <div className="card-body">
                <h4 className="card-title">{edge.node.title}</h4>
                <p className="card-text">{edge.node.publishDate}</p>
                <Link to={`/blog/${edge.node.slug}`} className="btn btn-secondary btn-block" >Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blogs
