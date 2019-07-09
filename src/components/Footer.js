import React from "react"
import styled from "styled-components"

const Footer = ({ title }) => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} {title}
      <br />
      <a
        href="https://ajsolutions.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built with 🔥 by AJSolutions
      </a>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  background: var(--black);
  padding: 4rem;
  color: var(--white);
  margin: 0;
`

export default Footer
