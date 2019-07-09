import styled from "styled-components"

export default styled.h2`
  font-size: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;
  margin: 0 0 2.5rem 0;
  ::after {
    content: "";
    height: 1px;
    width: 100%;
    background: var(--primary);
    position: absolute;
    bottom: -0.5rem;
    left: 0;
  }
`
