import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import SEO from "../components/seo"

const Page = styled.div`
  // outline: 2px solid red;

  padding: 12px 24px; // margin doesn't work. (b/c of scroll)
  padding-top: 80px; // header height
  padding-bottom: 60px;
  width: 100%;
  max-width: 1200px;
  min-height: 100%;

  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.4;

  overflow-x: hidden;
  overflow-y: auto;

  a {
    color: black;
  }

  section {
    margin-bottom: 20px;

    h2,
    h3 {
      font-weight: 700;
    }
  }

  // ipad
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  // desktop
  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  // transition: background 10s; //----------- bg transition
`
const creditStyle = css`
  margin-top: 72px;

  h3 {
    font-size: 1.4rem;
  }
  ul li {
    font-size: 1.4rem;
    margin: 4px 0;
  }
`
const extLinkStyle = css`
  text-decoration: none;
`
const AboutPage = props => {
  // console.log(props)

  const email = props.data.site.siteMetadata.email

  return (
    <Page>
      <SEO title={`About | SAYHYE.NET`} />
      <section className="intro">
        <p>
          Hi, I'm Hye Jin Lee, designer & illustrator working in the US. I have
          done work for Mirada and Hello Design as well as other clients in the
          US and South Korea. When I am not doing client work, I enjoy making
          letterforms and hand-drawn illustration. Please{" "}
          <a style={{ textDecoration: `underline` }} href={`mailto:${email}`}>
            get in touch with me
          </a>{" "}
          if you are looking for fun and playful design.
        </p>
      </section>
      <section className="list">
        <h2>Services</h2>
        <ul>
          <li>Editorial illustration</li>
          <li>Visual identity design</li>
          <li>Motion Graphics</li>
        </ul>
      </section>
      <section>
        <h2>Selected Clients</h2>
        <ul>
          <li>World Archery Asia, Seoul</li>
          <li>Motion Theory / Mirada, Los Angeles</li>
          <li>Hello Design, Los Angeles</li>
          <li>New York Times, New York</li>
        </ul>
      </section>
      <section css={creditStyle}>
        <h3>Credits</h3>
        <ul>
          <li>
            website design by{" "}
            <a
              css={extLinkStyle}
              href="https://paperdove.com"
              target="_blank"
              rel="noreferrer"
            >
              paperdove.com
            </a>
          </li>
          <li>
            <Link to="/license/">Copyrights & License Notices</Link>
          </li>
        </ul>
      </section>
    </Page>
  )
}

export default AboutPage

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
