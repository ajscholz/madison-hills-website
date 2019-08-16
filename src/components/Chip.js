import styled, { css } from 'styled-components';

export default styled.button`
  background-color: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  font-size: 0.6rem;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  border-radius: 12.5px;
  transition: var(--mainTransition);
  outline: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  position: relative;
  svg {
    transition: var(--mainTransition);
  }
  ${props =>
    props.selected &&
    css`
      background: var(--primary);
      color: var(--white);
      svg {
        transform: rotate(45deg);
      }
    `}
`;
