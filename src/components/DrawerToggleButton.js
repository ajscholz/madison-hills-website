import React from "react"
import styled from "styled-components"

import { FaBars } from "react-icons/fa"

const DrawerToggleButton = props => (
  <Button alt="open navigation" onClick={props.click}>
    <StyledIcon />
  </Button>
)

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  :focus {
    outline: none;
  }
  @media (min-width: 663px) {
    display: none;
  }
`

const StyledIcon = styled(FaBars)`
  display: block;
  font-size: 1.5rem;
  color: var(--primary);
`

export default DrawerToggleButton
