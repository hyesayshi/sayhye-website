// const React = require("react")
// const Layout = require("./src/components/layout").default

import React from "react";
import Layout from "./src/components/layout";
import "./static/reset.css"

// // https://github.com/gatsbyjs/gatsby/issues/4452#issuecomment-403456868
export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

// https://www.gatsbyjs.com/blog/2020-07-31-the-worlds-sneakiest-route-change#user-content-preserving-scroll-position
export const shouldUpdateScroll = ({ routerProps }) => {
  const { disableScrollUpdate } = routerProps.location.state
  return !disableScrollUpdate
}