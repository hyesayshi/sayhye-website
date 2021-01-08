import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Draggable from "react-draggable"

/**********
 * maxZIndex, updateMaxZIndex - when Card selected, update max value for parent component, CardTable
 * maxSize - all images will have similar width or height
 *
 * This component is a bit of a mess - trying to handle too many things (sharp image, text, gif,)
 *
 * Handling GIF
 * - it's a bit of a mess. a lot of one-time handling, not a good recurring system.
 * - Box gets created before GIF is loaded, so the initial box size matters. Right now, I just set it to
 *   4x3, and when gif is loaded, it will change. ** would be best to query gif w/h before it is loaded
 *   so the Box will already be properly sized.
 */
const BoxWrapper = styled.div`
  position: relative; //--- for fixed, disable Draggable positionOffset

  ${props => css`
    z-index: ${props.zIndex};
    transition: ${props.animatable && `transform 0.3s;`}
      //------- position transition
      // transform: translate(-50%, -50%) rotate(${props.angle}deg);
      scale(${props.scale});
  `}
`
const Box = styled.article`
  // outline: 1px solid red;
  // background-color: orange;
  box-sizing: content-box;
  position: absolute;
  overflow: hidden;
  transition: transform 0.3s; //----- rotate transition
  cursor: move;

  ${props => css`
    width: ${props.w}px;
    height: ${props.h}px;
    border-radius: ${props.maxSize * 0.03}px;
    border: ${props.maxSize * 0.005}px solid ${props.cardBorder};
    background-color: ${props.cardBackground
      ? props.cardBackground
      : props.cardBorder};
    color: ${props.cardText ? props.cardText : null};
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    transform: translate(-50%, -50%) rotate(${props.angle}deg)
      scale(${props.scale});
  `}
`
const Post = styled.div`
  // outline: 3px solid red;
  margin: 3%;
  padding: 3%;
  height: calc(100% - 2.8rem);

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-family: Manrope, sans-serif;
  ${props => css`
    font-size: ${props.maxSize * 0.06}px;
  `}
  // text-align: center;
  line-height: 1.2;

  header {
    margin-bottom: ${props => props.maxSize * 0.04};
  }

  h1,
  h2 {
    font-weight: 700;
  }
  p {
    font-size: ${({ maxSize }) => maxSize * 0.04}px;
    font-weight: 400;
  }
  ul {
    // margin: 4rem 2rem;
    margin: 3% 0;
  }
  li {
    margin-right: 4px;
    display: inline-block;
    line-height: 1.5;
  }
`
const TagItem = styled.li`
  ${({ maxSize, cardText }) => css`
    // margin: 0 ${maxSize * 0.01}px;
    padding: 0 ${maxSize * 0.03}px;
    border-radius: ${maxSize * 0.05}px;
    border: ${maxSize * 0.004}px solid ${cardText};
    font-size: ${maxSize * 0.04}px;
  `}
`

const Card = props => {
  //---------- props
  const img = props.node // regular img card
  const isGif = img && img.childImageSharp ? false : true // gif card
  const isDesc = img ? false : true // description card

  // console.log({ isGIF })
  // console.log(props)
  // index is the order of cards, zIndex is for 3d placement.
  const {
    index,
    numCards,
    maxZIndex,
    updateMaxZIndex,
    windowWidth,
    windowHeight,
    cardBorder,
    cardBackground,
    cardText,
    post,
  } = props

  //---------- max card size based on current window size
  const [maxSize, setMaxSize] = useState(null)
  const [w, setW] = useState(null)
  const [h, setH] = useState(null)
  // https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/
  const [gifSize, setGifSize] = useState({ w: 4, h: 3 })
  const [gifOpacity, setGifOpacity] = useState(0)
  useEffect(() => {
    // const ratio = img ? img.childImageSharp.fluid.aspectRatio : 0.67 // works for regular image and desc.
    let ratio
    if (isDesc) {
      ratio = 1.7
    } else if (isGif) {
      ratio = gifSize.w / gifSize.h
    } else {
      ratio = img.childImageSharp.fluid.aspectRatio
    }

    let maxSize
    const wideScreen = windowWidth > windowHeight
    if (ratio < 0.6) {
      // tall image
      if (wideScreen) maxSize = windowHeight * 0.9
      else maxSize = windowHeight * 0.8
    } else {
      maxSize = Math.min(windowWidth, windowHeight) * 0.85
    }
    if (isDesc) {
      maxSize *= 0.8
    }

    let w = maxSize
    let h = maxSize
    if (ratio > 1) {
      h = w * (1 / ratio)
    } else if (ratio < 1) {
      w = h * ratio
    } else if (ratio === 1) {
      w = maxSize * 0.9
      h = maxSize * 0.9
    }
    setMaxSize(maxSize)
    setW(w)
    setH(h)
  }, [windowWidth, windowHeight, img, gifSize.w, gifSize.h])

  //---------- angle for spread (for more optimization, move thiw to cardTable)
  const [initialAngle, setInitialAngle] = useState(null)
  useEffect(() => {
    const maxAngle = Math.min(numCards * 6, 20)
    const initialAngle =
      -maxAngle + ((index - 1) * (maxAngle * 2)) / Math.max(numCards - 1, 1) // (index-1) b/c it starts at 1; Math.max() b/c 1/0 doesn't work
    setInitialAngle(initialAngle)
  }, [index, numCards])

  // https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-347595352
  // could be useful b/c window is not available at compiling pages with gatsby webpack
  // const windowGlobal = typeof window !== "undefined" && window

  //---------- position & rotation
  const [pos, setPos] = useState({ x: null, y: null })
  const [angle, setAngle] = useState(0)
  useEffect(() => {
    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2, //----- 요게 핵심.
    }

    setPos(pos)
  }, [])

  useEffect(() => {
    if (windowWidth && windowHeight) {
      const xSpacing = Math.min(maxSize * 0.25, windowWidth / (numCards * 2)) // in case too many cards or too narrow width. value is arbitrary
      const xStart = windowWidth * 0.5 - xSpacing * (numCards - 1) * 0.5 // from center, subtract half width of spread

      const tPos = {
        x: xStart + xSpacing * (index - 1),
        y: windowHeight / 2,
      }
      setPos(tPos)
      setAngle(initialAngle)
    }
  }, [windowWidth, windowHeight, index, initialAngle, maxSize, numCards]) // eslint-disable-next-line react-hooks/exhaustive-deps

  //---------- update z-index
  const [zIndex, setZIndex] = useState(0)
  useEffect(() => {
    setZIndex(index)
  }, [index])

  //---------- event handlers
  const [scale, setScale] = useState(0.8)
  const [animatable, setAnimatable] = useState(true) // apply transition or not. (set false when dragging)
  const handleStart = () => {
    setAnimatable(false) // don't transition when dragging
    // every time drag starts, increase maxZIndex to put Card on top. it can get very big.
    updateMaxZIndex()
    setZIndex(maxZIndex)
    setAngle(0)
    setScale(1) // zoomed scale
  }
  const handleDrag = (e, data) => {
    setPos({ x: data.x, y: data.y })
  }
  const handleStop = () => {
    setAnimatable(true)
    setAngle(initialAngle)
    setScale(0.8) // normal scale
  }
  const onGifLoad = ({ target: img }) => {
    console.log("gif loaded")
    setGifSize({ w: img.naturalWidth, h: img.naturalHeight })
    setGifOpacity(1)
  }

  return (
    pos.x &&
    pos.y && (
      <Draggable
        // cancel="li" //----- for later, to make tag links
        position={pos}
        positionOffset={{ x: 0, y: props.scrollY }} //------- important for spawn position
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        {/* position */}
        <BoxWrapper
          animatable={animatable}
          angle={angle}
          scale={scale}
          zIndex={zIndex}
          // style={{
          // zIndex: zIndex,
          // transition: animatable ? `transform 0.3s` : `none`, //---------- for cards spread
          // }}
        >
          {/* rotation & scale */}
          <Box
            index={index}
            w={w}
            h={h}
            maxSize={maxSize}
            angle={angle}
            scale={scale}
            cardBorder={cardBorder}
            cardText={cardText}
            cardBackground={cardBackground}
          >
            {/* regular image */}
            {img && img.childImageSharp && (
              <Img
                draggable={false}
                fluid={img.childImageSharp.fluid}
                alt={img.name.split("-").join(" ")}
              />
            )}

            {/* gif image */}
            {img && !img.childImageSharp && (
              <img
                src={img.publicURL}
                onLoad={onGifLoad}
                style={{
                  width: `100%`,
                  // objectFit: `cover`,
                  // opacity: gifOpacity,
                  transition: `opacity 0.2s`,
                }}
                draggable={false}
                alt={img.name.split("-").join(" ")}
              />
            )}

            {/* description card */}
            {post && (
              <Post maxSize={maxSize}>
                <header>
                  <h1>{post.frontmatter.title}</h1>
                  <h2>{new Date(post.frontmatter.date).getFullYear()}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: post.html }} />
                <ul>
                  {post.frontmatter.tags.sort().map(tag => {
                    return (
                      <TagItem key={tag} maxSize={maxSize} cardText={cardText}>
                        {tag.toUpperCase()}
                      </TagItem>
                    )
                  })}
                </ul>
              </Post>
            )}
          </Box>
        </BoxWrapper>
      </Draggable>
    )
  )
}

export default Card
