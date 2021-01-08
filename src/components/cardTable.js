import React, { useState, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"
import Card from "../components/card"

/**
 * > CardTable
 * doesn't do much other than grouping Cards together, caculate some data,
 * and pass props to each Card.
 */

const CardTable = props => {
  const post = props.post

  const { cardBorder, cardBackground, cardText } = post.frontmatter
  const nodes = props.nodes

  // console.log(nodes)

  // count all cards: post + image cards
  const [maxZIndex, setMaxZIndex] = useState(nodes.length + 2)

  const [windowWidth, windowHeight] = useWindowSize()

  // https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-347595352
  // const windowGlobal = typeof window !== "undefined" && window

  const [scrollY, setScrollY] = useState(null)
  useEffect(() => {
    // https://stackoverflow.com/questions/20514596/document-documentelement-scrolltop-return-value-differs-in-chrome
    const scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0)

    setScrollY(scrollY)
  }, [scrollY])

  return (
    <div style={{
      position: `absolute`,
      top: 0,
      left: 0,
    }}>
      {/* description card */}
      <Card
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        scrollY={scrollY}
        index={1} // start index 1
        numCards={nodes.length + 1}
        maxZIndex={maxZIndex}
        updateMaxZIndex={() => setMaxZIndex(prevMaxZIndex => prevMaxZIndex + 1)}
        cardBorder={cardBorder ? cardBorder : "black"}
        cardBackground={cardBackground ? cardBackground : "black"}
        cardText={cardText ? cardText : "white"}
        post={post}
      />
      {nodes.map((node, index) => {
        return (
          <Card
            key={node.id}
            node={node}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            scrollY={scrollY}
            index={index + 2} // desc card index 1 + 1 = 2, otherwise, can't select menu below.
            numCards={nodes.length + 1}
            maxZIndex={maxZIndex}
            updateMaxZIndex={() =>
              setMaxZIndex(prevMaxZIndex => prevMaxZIndex + 1)
            }
            cardBorder={cardBorder ? cardBorder : "black"}
            post={post}
          />
        )
      })}
    </div>
  )
}

export default CardTable
