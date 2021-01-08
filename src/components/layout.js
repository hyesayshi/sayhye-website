import React, { useState, useEffect } from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"
import PostList from "./postList"
import "../../static/reset.css"
import "@fontsource/manrope/400.css"
import "@fontsource/manrope/700.css"

/**
 * > Style
 * break points (min 280px, 320px, 768px, 1024px)
 */

const globalCSS = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    width: 100%;
    min-height: 100%;
    font-size: 10px;
  }
  html {
    // overflow is important to extend body height to match nav height. also, for scroll position.
    overflow: auto;
    overflow-x: hidden;
    background: gray;
  }
  body {
    font-family: sans-serif;
    overflow-x: hidden;
  }

  /* intermediaries between body and my elements
     super important rules, for getting scroll position.
  */
  #___gatsby,
  #gatsby-focus-wrapper {
    position: relative;
    min-width: 280px;
    height: 100%;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    // text-decoration: underline;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Main = styled.main`
  position: absolute;
  top: 0;
  left: 0;
`
const Layout = props => {
  // const nodes = props.data && props.data.allFile.nodes
  const children = props.children

  const post = props.data && props.data.markdownRemark
  const frontmatter = post && post.frontmatter

  const menuText =
    frontmatter && frontmatter.menuText ? frontmatter.menuText : "white"
  const menuBackground =
    frontmatter && frontmatter.menuBackground
      ? frontmatter.menuBackground
      : "#333"

  // send path data to PostList to make the right list item draggable.
  const path = props.path

  return (
    <Container>
      <Global styles={globalCSS} />
      <Header menuText={menuText} />
      <PostList
        menuText={menuText}
        menuBackground={menuBackground}
        path={path}
      />
      <Main>{children}</Main>
    </Container>
  )
}

export default Layout
