import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import DrawerToggleButton from "./DrawerToggleButton"

import links from "../utils/links"

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

  return (
    <StyledHeader>
      <MobileNav>
        <StyledLogoLink to="/">
          <StyledImage
            fluid={logo.childImageSharp.fluid}
            alt={siteTitle}
          ></StyledImage>
        </StyledLogoLink>
        <DrawerToggleButton click={drawerClickHandler} />
      </MobileNav>
      <Nav>
        <StyledLogoLink to="/">
          <StyledImage
            fluid={logo.childImageSharp.fluid}
            alt={siteTitle}
          ></StyledImage>
        </StyledLogoLink>
        {links.map(link => {
          return <StyledLink to={link.path}>{link.name}</StyledLink>
        })}
      </Nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin: 0 auto;
  background: var(--white);
  padding: 1rem 2rem;
`

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 663px) {
    display: none;
  }
`

const Nav = styled.nav`
  display: none;
  @media (min-width: 663px) {
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: center;
    place-items: center;
    grid-gap: 3rem;
    grid-auto-flow: column;
  }
`

const StyledLogoLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  grid-column: 3 / 4;
`

const StyledImage = styled(Img)`
  width: 100px;
`

const StyledLink = styled(Link)`
  text-transform: capitalize;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
