import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Draggable from "react-draggable"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { FaHandPointLeft } from "react-icons/fa"
import { CgCloseO } from "react-icons/cg"

const ListItemBox = styled.div`
  // outline: 1px solid red;
  margin: 4px 6px;
  padding: 0px 8px;
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

  li {
    a {
      color: ${props => `${props.menuText}`};
    }
    a svg {
      position: relative;
      left: 0;
      transition: left 0.2s, transform 0.2s;
    }
  }

  ${props =>
    props.canDrag &&
    css`
      font-style: italic;
      // font-weight: 700;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      background: ${props.menuText}; //----- invert color
      transform: rotate(-3deg);

      li {
        a {
          color: ${props.menuBackground}; //----- invert color
        }
      }
    `}
  ${({ animatable }) =>
    animatable &&
    css`
      transition: transform 0.3s; //----- return back transition
    `}

  &:hover {
    li a svg {
      left: -8px;
    }
  }

  // tablet
  @media (min-width: 768px) {
    margin-right: 3rem;
  }
`
const handCSS = css`
  margin: 0 12px;
  position: relative;
  font-size: 1.8rem;

  // phone
  @media (min-width: 360px) {
    font-size: 2.4rem;
  }
  // ipad
  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
  // desktop
  @media (min-width: 1024px) {
    font-size: 4.8rem;
  }
`

const closeCSS = css`
  // outline: 1px solid red;
  // margin: auto 8px auto 18px;
  position: relative;
  font-size: 1.8rem;

  transform: scale(1);

  left: 0 !important; //----- prevent left transition

  &:hover {
    transform: scale(1.2);
  }

  // phone
  @media (min-width: 360px) {
    font-size: 2.4rem;
  }
  // ipad
  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
  // desktop
  @media (min-width: 1024px) {
    font-size: 4.8rem;
  }
`

const PostListItemDraggable = props => {
  const { node, index, canDrag, menuText, menuBackground } = props

  const [pos, setPos] = useState({ x: null, y: null })
  const [angle, setAngle] = useState(0)
  const [zIndex, setZIndex] = useState(0)
  const [animatable, setAnimatable] = useState(true) // apply transition or not. (set false when dragging)

  useEffect(() => {
    // when page is loaded
    // reset transformation
    setPos({ x: 0, y: 0 })
    if (canDrag) {
      setZIndex(1)
      setAngle(10)
    } else {
      setZIndex(0)
      setAngle(0)
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
      <div
        style={{
          position: `relative`,
          zIndex: zIndex,
          transition: animatable ? `transform 0.3s` : `none`,
        }}
      >
        <ListItemBox
          zIndex={zIndex}
          animatable={animatable}
          canDrag={canDrag}
          menuText={menuText}
          menuBackground={menuBackground}
        >
          <li>
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
                style={{
                  // outline: `1px solid red`,
                  margin: `auto 0 auto 8px`,
                  padding: 6,
                  overflow: `hidden`,
                }}
              >
                <CgCloseO css={closeCSS} style={{ color: menuBackground }} />
              </Link>
            )}
          </li>
        </ListItemBox>
      </div>
    </Draggable>
  )
}

export default PostListItemDraggable
