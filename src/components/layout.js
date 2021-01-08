import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"
import PostList from "./postList"
import "@fontsource/manrope/400.css"
import "@fontsource/manrope/700.css"

/**
 * > Style
 * break points (min 280px, 320px, 768px, 1024px)
 *
 * > global inline style is ugly but i needed to pass props, but couldn't make it work as a separate const.
 */

const Container = styled.div`
  width: 100%;
  min-height: 100%;
`
const Layout = props => {
  // const nodes = props.data && props.data.allFile.nodes
  const children = props.children

  const post = props.data && props.data.markdownRemark
  const frontmatter = post && post.frontmatter

  const defaultBackground =
    props.data && props.data.site
      ? props.data.site.siteMetadata.defaultBackground
      : `#aaf0d1`

  const menuText =
    frontmatter && frontmatter.menuText ? frontmatter.menuText : "black"
  const menuBackground =
    frontmatter && frontmatter.menuBackground
      ? frontmatter.menuBackground
      : defaultBackground

  // #aaf0d1

  // send path data to PostList to make the right list item draggable.
  const path = props.path

  // console.log("layout", props)

  return (
    <Container>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
            margin: 0;
          }
          html {
            // overflow is important to extend body height to match nav height. also, for scroll position.
            overflow: auto;
            overflow-x: hidden;
            background: ${menuBackground};
          }
          html,
          body {
            width: 100%;
            min-height: 100vh;
            font-size: 10px;
          }
          body {
            font-family: "Manrope", sans-serif;
            overflow-x: hidden;
          }

          /* intermediaries between body and my elements
     super important rules, for getting scroll position.
  */
          #___gatsby,
          #gatsby-focus-wrapper {
            position: relative;
            min-width: 280px;
            min-height: 100vh;
            overflow: hidden;
          }

          a {
            text-decoration: none;
          }
          a:hover {
            // text-decoration: underline;
          }
        `}
        menuBackground={menuBackground}
      />
      <Header menuText={menuText} />
      {path !== "/about/" && path !== "/license/" && (
        <PostList
          menuText={menuText}
          menuBackground={menuBackground}
          path={path}
        />
      )}
      <main>{children}</main>
    </Container>
  )
}

export default Layout
