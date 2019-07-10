import styled from "styled-components"

export default styled.section`
  padding: ${props => (props.large ? "6rem" : "4rem")} 10vw;
  background: ${props => (props.dark ? "var(--black)" : "var(--white)")};
  color: ${props => (props.dark ? "var(--white)" : "var(--black)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    padding: ${props => (props.large ? "6rem" : "4rem")} 5vw;
  }
`
