import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import {useWindowDimensions} from '../utils/WindowDimensionsProvider'

import DrawerToggleButton from "./DrawerToggleButton"
import Navigation from "./Navigation"

const data = graphql`
  {
    logo: file(name: { eq: "logo" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Header = ({ siteTitle, drawerClickHandler }) => {
  const { logo } = useStaticQuery(data)

  const {width} = useWindowDimensions()

  return (
    <StyledHeader>
      <h3 style={{ margin: "0", position: "absolute", top: '0', left: '0', padding: '.5rem', background: 'red', zIndex:'1000' }}>{width}</h3>
      <StyledLogoLink to="/">
        <StyledImage
          fluid={logo.childImageSharp.fluid}
          alt={siteTitle}
        ></StyledImage>
      </StyledLogoLink>
      {width > 662 ? <Navigation /> : null}
      <DrawerToggleButton click={drawerClickHandler} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin: 0 auto;
  background: var(--white);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 663px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledLogoLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
`

const StyledImage = styled(Img)`
  width: 100px;
  @media (min-width: 663px) {
    margin-bottom: 1rem;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
