import React, { useState, useEffect, useLayoutEffect } from "react"
import { Link } from "gatsby"
import Draggable from "react-draggable"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { FaHandPointLeft } from "react-icons/fa"
import { CgCloseO } from "react-icons/cg"

const ListItemBox = styled.div`
  // outline: 1px solid red;

  // margin: 4px;
  padding: 0px 6px;
  border-radius: min(2vw, 2vh);

  position: relative;
  top: 0;
  left: 0;

  z-index: ${props => props.zIndex};

  //----- no line break: https://stackoverflow.com/a/24142715
  display: inline-block;
  float: left; // inline-block alone adds extran margin
  white-space: nowrap;
  overflow: hidden;

  font-size: 2.4rem;
  line-height: 1.4;

  div {
    // outline: 1px solid red;
    margin: 4px 0;

    a {
      color: ${props => `${props.menuText}`};
    }
    a svg {
      position: relative;
      left: 0;
      transition: left 0.2s, transform 0.2s;
    }
  }

  // // phone
  // @media (min-width: 360px) {
  //   font-size: 2.8rem;
  // }

  // ipad
  @media (min-width: 768px) {
    font-size: 3.6rem;
  }

  // desktop
  @media (min-width: 1024px) {
    font-size: 4.8rem;
  }

  ${props =>
    props.canDrag &&
    css`
      font-style: italic;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      background: ${props.menuText}; //----- invert color
      transform: rotate(-3deg);

      div {
        a {
          color: ${props.menuBackground}; //----- invert color
        }
      }
    `}
  ${({ animatable }) =>
    animatable &&
    css`
      transition: transform 0.2s; //----- return back rotate transition
    `}

  &:hover {
    div a svg {
      left: -8px;
    }
  }
`
const handCSS = css`
  margin: 0 12px;
  position: relative;
  font-size: 0.8em;
`
const closeCSS = css`
  // outline: 1px solid red;
  margin: 0 2px 0 0; // quick fix to avoid layout shifting (close svg width is narrower)

  transform: scale(1);
  left: 0 !important; //----- prevent left transition

  &:hover {
    transform: scale(1.2);
  }
`

const PostListItemDraggable = props => {
  const { node, index, canDrag, menuText, menuBackground } = props

  const [pos, setPos] = useState({ x: null, y: null })
  // const [angle, setAngle] = useState(0)
  const [zIndex, setZIndex] = useState(0)
  const [animatable, setAnimatable] = useState(true) // apply transition or not. (set false when dragging)

  // because of pos null at start, some listItems flash, this is a temporary solution.
  useLayoutEffect(() => {
    setPos({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    // when page is loaded and after closed,
    // reset transformation
    setPos({ x: 0, y: 0 })
    if (canDrag) {
      setZIndex(1)
      // setAngle(10)
    } else {
      setZIndex(0)
      // setAngle(0)
    }
  }, [canDrag])

  //---------- event handlers
  const handleStart = () => {
    setAnimatable(false)
  }
  const handleDrag = (e, data) => {
    setPos({ x: data.x, y: data.y })
  }
  const handleStop = () => {
    setAnimatable(true)
  }

  return (
    <Draggable
      disabled={!canDrag}
      cancel={`svg`}
      position={pos}
      // positionOffset={pos}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <li
        style={{
          position: `relative`,
          zIndex: zIndex,
          transition: animatable ? `transform 0.6s` : `none`,
        }}
      >
        <ListItemBox
          zIndex={zIndex}
          animatable={animatable}
          canDrag={canDrag}
          menuText={menuText}
          menuBackground={menuBackground}
        >
          <div
            style={{
              // outline: `1px solid red`,
              display: `flex`,
            }}
          >
            <Link
              to={node.fields.slug}
              state={{ disableScrollUpdate: true }}
              draggable={false}
            >
              {index + 1}.{node.frontmatter.title}
              {!canDrag && <FaHandPointLeft css={handCSS} />}
            </Link>
            {canDrag && (
              <Link
                to="/"
                state={{ disableScrollUpdate: true }}
                draggable={false}
                aria-label="close"
                style={{
                  // outline: `1px solid blue`,
                  margin: `auto 0 auto 12px`,
                  display: `inline-flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
              >
                <CgCloseO css={closeCSS} style={{ color: menuBackground }} />
              </Link>
            )}
          </div>
        </ListItemBox>
      </li>
    </Draggable>
  )
}

export default PostListItemDraggable
