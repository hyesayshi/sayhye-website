import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const headerCSS = css`
  // outline: 1px solid red;

  padding: 12px 24px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 280px;
  height: 60px;
  z-index: 1;

  // click through fixed container
  pointer-events: none;
  h1, div {
    pointer-events: auto;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Manrope, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;

  // phone
  @media (min-width: 360px) {
    font-size: 3rem;
  }

  // ipad
  @media (min-width: 768px) {
    padding: 36px 24px;
    font-size: 4rem;
  }
`
const aboutCSS = css`
  font-size: 1.8rem;
  font-weight: 400;

  // phone
  @media (min-width: 360px) {
    font-size: 2.6rem;
  }

  // ipad
  @media (min-width: 768px) {
    font-size: 3.6rem;
  }

`

const Header = props => {
  const { menuText } = props

  const [emoji, setEmoji] = useState(null)
  useEffect(() => {
    const emojis = ["👋", "🐘", "✨", "😀", "💩", "👀", "🙉", "🐥"]
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)])
  }, [])

  return (
    <header css={headerCSS}>
      <h1>
        <Link
          to="/"
          style={{
            color: menuText,
          }}
        >
          SAY HYE {emoji}
        </Link>
      </h1>
      <div css={aboutCSS}>
        <Link
          to="/about/"
          style={{
            color: menuText,
          }}
        >
          ABOUT
        </Link>
      </div>
    </header>
  )
}

export default Header
