import styled from 'styled-components';

export default styled.h1`
  font-size: 1.5rem;
  text-align: ${props => (props.position === 'left' ? 'left' : 'center')};
  text-transform: capitalize;
  position: relative;
  display: inline-block;
  margin: 0 0 2.5rem 0;
  ::after {
    content: '';
    height: 2px;
    width: 80%;
    background: var(--primary);
    position: absolute;
    bottom: -0.5rem;
    left: ${props => (props.position === 'left' ? '0' : '10%')};
  }
  @media (min-width: 400px) {
    font-size: 2rem;
  }
`;
