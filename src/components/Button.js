import styled from "styled-components"

export default styled.button`
  font-size: 0.9rem;
  padding: 1em 2em;
  background-color: var(--primary);
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  border-radius: 8px;
  transition: var(--mainTransition);
  border: none;
  :hover {
    transform: scale(1.05);
  }
`
