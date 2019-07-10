import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import links from "../utils/links"

const Navigation = () => {
  return (
    <nav>
      <StyledList>
        {links.map(link => (
          <StyledListItem key={link.name}>
            <StyledLink to={link.path} alt={link.name}>
              {link.name}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </nav>
  )
}

const StyledList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: 663px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const StyledListItem = styled.li`
  margin-bottom: 0.75rem;
  @media (min-width: 663px) {
    margin: 0 1.75rem 0 1.75rem;
  }
`

const StyledLink = styled(Link)`
  text-transform: capitalize;
  font-size: 1.5rem;
  transition: var(--mainTransition);
  &:hover {
    color: var(--primary);
  }
  @media (min-width: 663px) {
    font-size: 1rem;
  }
`

export default Navigation
