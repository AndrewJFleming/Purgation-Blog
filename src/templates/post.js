import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import * as style from "./single.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Catlist from "../components/catlist"
import Taglist from "../components/taglist"
import PostNav from "../components/postNav"

export default ({ data }) => {
  const post = data.thePost
  return (
    <Layout>
      <SEO title={post.title} />
      <article className={style.article}>
        {post.featuredImage && (
          <figure className={style.featimg}>
            <Img
              fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
              alt={post.featuredImage.node.altText}
            />
          </figure>
        )}
        <h1>{post.title}</h1>
        <Catlist postObject={post} />
        <div>
          by {post.author.node.name}. Published on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <Taglist postObject={post} />
      </article>
      <PostNav prevPost={data.prevPost} nextPost={data.nextPost} />
    </Layout>
  )
}

export const query = graphql`
  query($databaseId: Int!, $nextId: Int, $prevId: Int) {
    thePost: wpPost(databaseId: { eq: $databaseId }) {
      date
      databaseId
      content
      title
      author {
        node {
          name
        }
      }
      categories {
      nodes {
        link
        name
      }
    }
    tags {
      nodes {
        link
        name
      }
    }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      } 
    }
    nextPost: wpPost(databaseId: { eq: $nextId }) {
      title
      uri
    }
    prevPost: wpPost(databaseId: { eq: $prevId }) {
      title
      uri
    }
  }
`
