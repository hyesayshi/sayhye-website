import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import CardTable from "../components/cardTable"

const WorkTemplate = ({ location, data }) => {
  const post = data.markdownRemark
  const nodes = data.allFile.nodes

  return (
    <>
      <SEO title={`${post.frontmatter.title} | SAYHYE.NET`} isPost />
      <CardTable post={post} nodes={nodes} />
    </>
  )
}

export default WorkTemplate

export const pageQuery = graphql`
  query($slug: String!, $slugNoSlash: String!) {
    site {
      siteMetadata {
        defaultBackground
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
        menuBackground
        menuText
        cardBorder
        cardBackground
        cardText
      }
      fields {
        slug
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)|(mp4)/" }
        relativeDirectory: { eq: $slugNoSlash }
      }
      sort: { fields: name, order: DESC }
    ) {
      nodes {
        id
        extension
        publicURL
        name
        childImageSharp {
          fluid(maxWidth: 900, quality: 50) {
            aspectRatio
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
