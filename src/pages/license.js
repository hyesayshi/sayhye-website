import React from "react"
import { graphql } from "gatsby"
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
  font-size: 1.2rem;
  line-height: 1.4;

  overflow-x: hidden;
  overflow-y: auto;

  a {
    color: black;
    text-decoration: underline;
  }

  h2 {
    font-size: 1.8rem;
  }

  section {
    margin-bottom: 20px;

    h2,
    h3 {
      font-weight: 700;
    }
  }
`
const creditStyle = css`
  margin-top: 16px;

  h3 {
    font-size: 1.4rem;
  }
`
const LicensePage = props => {
  // console.log(props)

  return (
    <Page>
      <SEO title={`Copyright and License Notices | SAYHYE.NET`} />
      <h2>Copyrights and License Notices</h2>
      <section css={creditStyle}>
        <h3>Font Awesome</h3>
        <p>
          <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
            https://fontawesome.com/
          </a>
        </p>
        <p>Attribution 4.0 International (CC BY 4.0)</p>
        <p>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            https://creativecommons.org/licenses/by/4.0/
          </a>
        </p>
      </section>
      <section>
        <h3>css.gg</h3>
        <p>
          <a
            href="https://github.com/astrit/css.gg"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/astrit/css.gg
          </a>
        </p>

        <p>MIT License</p>
        <p>Copyright (c) 2019 css.gg</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </section>
    </Page>
  )
}

export default LicensePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        defaultBackground
      }
    }
  }
`
