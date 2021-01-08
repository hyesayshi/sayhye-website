import React from "react"
import { graphql } from "gatsby"
// import Layout from '../components/layout'

const NotFoundPage = props => {
  return <div>Page Not Found</div>
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        defaultBackground
      }
    }
  }
`
