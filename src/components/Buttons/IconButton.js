import styled from 'styled-components';

export default styled.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  color: var(--white);
  font-size: 0.9rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  padding: 0;
  &:focus,
  :hover {
    background: #373d3f;
  }
  & > svg {
    display: block;
  }
`;
