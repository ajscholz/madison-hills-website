import React from "react"
import styled from "styled-components"

const Footer = ({ title }) => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} Madison Hills Christian Church
      <StyledLink
        href="https://ajsolutions.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built with 🔥 by AJSolutions
      </StyledLink>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  background: var(--black);
  padding: 4rem 10vw;
  color: var(--white);
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
`

const StyledLink = styled.a`
  display: block;
  font-weight: 300;
`

export default Footer
