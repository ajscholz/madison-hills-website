/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useBrowserWidth } from "../context/BrowserWidthContext"

import Header from "./header"
import Footer from "./Footer"
import GlobalStyles from "../components/GlobalStyles"
import SideDrawer from "./SideDrawer"
import Backdrop from "./Backdrop"

import links from "../utils/links"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const width = useBrowserWidth()

  const [sideDrawerOpen, drawerToggleHandler] = useState(false)

  if (width > 662 && sideDrawerOpen) {
    drawerToggleHandler(false)
  }

  return (
    <>
      <GlobalStyles />
      <h3
        style={{
          margin: "0",
          position: "absolute",
          top: "0",
          left: "0",
          padding: ".5rem",
          background: "red",
          zIndex: "1000",
        }}
      >
        {width}
      </h3>
      <Header
        siteTitle={data.site.siteMetadata.title}
        drawerClickHandler={() => drawerToggleHandler(!sideDrawerOpen)}
      />
      {width <= 662 ? (
        <SideDrawer
          links={links}
          open={sideDrawerOpen}
          drawerClickHandler={() => drawerToggleHandler(!sideDrawerOpen)}
        />
      ) : null}
      {sideDrawerOpen ? (
        <StyledBackdrop onClick={() => drawerToggleHandler(!sideDrawerOpen)} />
      ) : null}

      <main>{children}</main>

      <Footer title={data.site.siteMetadata.title} />
    </>
  )
}

const StyledBackdrop = styled(Backdrop)`
  @media (min-width: 663px) {
    display: none;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
