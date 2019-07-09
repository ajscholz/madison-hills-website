import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import links from "../utils/links"
import { FaBars } from "react-icons/fa"

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

const Header = ({ siteTitle }) => {
  const { logo } = useStaticQuery(data)
  const [open, toggleOpen] = useState(false)

  return (
    <StyledHeader>
      <MobileNav>
        <StyledLogoLink to="/">
          <StyledImage
            fluid={logo.childImageSharp.fluid}
            alt={siteTitle}
          ></StyledImage>
        </StyledLogoLink>
        <MenuIcon />
        <Drawer>
          {links.map(link => {
            return <StyledLink to={link.path}>{link.name}</StyledLink>
          })}
        </Drawer>
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

const MobileNav = styled.nav`
  display: flex;
  align-items: center;
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

const MenuIcon = styled(FaBars)`
  font-size: 1.5rem;
  color: var(--primary);
`

const Drawer = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--primaryDark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
