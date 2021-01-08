import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  // const nodes = data.allMarkdownRemark.nodes

  return (
    <div>
      <SEO title={`SAYHYE.NET`} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        email
        defaultBackground
      }
    }
  }
`
