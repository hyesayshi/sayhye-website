import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import PostListItem from "./postListItem"
// import { CgCloseO } from "react-icons/cg"

const Nav = styled.nav`
  padding: 12px; // margin doesn't work. (b/c of scroll)
  padding-top: 80px; // header height
  padding-bottom: 60px;
  width: 100%;
  min-height: 100vh;

  overflow-x: hidden;
  overflow-y: auto;
  
  // animation: fade-in 0.3s forwards;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  ${({ menuBackground }) => css`background: ${menuBackground};`}

  // transition: background 0.3s; //----------- bg transition. performance issue.
`
// const StyledCloseButton = styled(CgCloseO)`
//   position: fixed;
//   transform: translate(-50%, -50%); // center it
//   left: 50%;
//   bottom: -100px;
//   transition: bottom 0.2s;
//   bottom: 1%;

//   font-size: 6rem;
// `

const PostList = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes
  const menuText = props.menuText ? props.menuText : "white"
  const menuBackground = props.menuBackground ? props.menuBackground : "black"

  // const [canDrag, setCanDrag] = useState(false)
  const [path, setPath] = useState(null)
  useEffect(() => {
    // if page path is same as page slug, can drag.
    const path = props.path
    setPath(path)
  }, [props.path])

  // const [clickPos, setClickPos] = useState({ x: null, y: null })
  // const handleClick = e => {
  //   setClickPos({ x: e.clientX, y: e.clientY })
  // }

  return (
    <Nav menuBackground={menuBackground}>
      <ul>
        {/* <p>clicked at {clickPos.x}, {clickPos.y}</p> */}
        {nodes.map((node, idx) => {
          return (
            <PostListItem
              key={node.id}
              node={node}
              canDrag={path === node.fields.slug ? true : false}
              index={idx}
              menuText={menuText}
              menuBackground={menuBackground}
            />
          )
        })}
      </ul>
      {/* <StyledCloseButton 
        color={menuText}
      /> */}
    </Nav>
  )
}

export default PostList
