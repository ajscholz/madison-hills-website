import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Section>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </Section>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background: var(--primary);
  margin-bottom: 1.45rem;
`

const Section = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
