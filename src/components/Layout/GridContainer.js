import styled from 'styled-components';

export default styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;
