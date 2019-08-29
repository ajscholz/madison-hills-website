import React from 'react';
import styled from 'styled-components';

const VerseSection = props => {
  const { text, reference } = props;
  return (
    <Wrapper>
      <Verse>{text}</Verse>
      <Reference>{reference}</Reference>
    </Wrapper>
  );
};

export default VerseSection;

const Wrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

const Verse = styled.p`
  margin: 0;
  @media (min-width: 576px) {
    font-size: 1.2em;
  }
  @media (min-width: 776px) {
    font-size: 1.5em;
  }
`;

const Reference = styled.h2`
  margin-bottom: 0;
  color: var(--primary);
  font-size: 0.7em;
  @media (min-width: 576px) {
    font-size: 0.85em;
  }
  @media (min-width: 776px) {
    font-size: 1em;
  }
`;
