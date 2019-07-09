import styled from "styled-components"

export default styled.h2`
  font-size: 2rem;
  color: ${props => (props.white ? "var(--white)" : "var(--black)")};
`
