import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

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
  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledImage
          fluid={logo.childImageSharp.fluid}
          alt={siteTitle}
        ></StyledImage>
      </StyledLink>
    </StyledHeader>
  )
}

<<<<<<< HEAD
const H1 = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  text-transform: uppercase;
=======
const StyledHeader = styled.header`
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
>>>>>>> @{-1}
`

const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
`

const StyledImage = styled(Img)`
  width: 100px;
  /* height: 100px; */
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
