/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"

import BrowserWidthProvider from "./src/context/BrowserWidthContext"

require("typeface-nunito-sans")

export const wrapRootElement = ({ element }) => (
  <BrowserWidthProvider>{element}</BrowserWidthProvider>
)
