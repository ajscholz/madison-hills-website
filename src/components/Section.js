import styled, { css } from 'styled-components';

export default styled.section`
  padding: ${props => (props.large ? '6rem' : '4rem')} 10vw;
  background: ${props => (props.dark ? 'var(--black)' : 'var(--white)')};
  color: ${props => (props.dark ? 'var(--white)' : 'var(--black)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    padding: ${props => (props.large ? '6rem' : '4rem')} 5vw;
  }

  ${props =>
    props.wide &&
    css`
      @media (min-width: 600px) {
        padding-left: 7.5vw;
        padding-right: 7.5vw;
      }
      @media (min-width: 767px) {
        padding-left: 5vw;
        padding-right: 5vw;
      }
      @media (min-width: 1200px) {
        padding-left: 2.5vw;
        padding-right: 2.5vw;
      }
    `}
`;
