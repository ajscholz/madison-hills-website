import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import Title from './Title';
import Section from './Section';

export default props => {
  return (
    <>
      {props.programs.map(({ program }, index) => (
        <Section dark={index % 2 === 1} key={program.id}>
          <Title>{program.title}</Title>
          <MinistrySection>
            <Image
              fluid={program.image.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
            <MinistryInfo>
              <div style={{ fontWeight: 'bold' }}>
                {program.dayOfWeek} {program.startTime}-{program.endTime}
              </div>
              <div style={{ fontWeight: 'bold' }}>
                Location: {program.location}
              </div>
              <div style={{ fontWeight: 'bold' }}>Ages: {program.ageRange}</div>
            </MinistryInfo>
            <MinistryDescription>
              {program.description.description}
            </MinistryDescription>
          </MinistrySection>
        </Section>
      ))}
    </>
  );
};

const MinistrySection = styled.div`
  display: grid;
  justify-items: center;
  grid-template-areas:
    'picture'
    'info'
    'description';
  grid-gap: 1rem;
  width: 100%;
  max-width: 700px;

  @media (min-width: 660px) {
    max-height: 250px;
    grid-template-columns: 40% 1fr;
    grid-column-gap: 2rem;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'picture info'
      'picture description';
    justify-items: start;

    ${props =>
      props.flip &&
      css`
        grid-template-columns: 1fr 40%;
        grid-template-areas:
          'info picture'
          'description picture';
        text-align: right;
      `}
  }
`;

const Image = styled(Img)`
  grid-area: picture;
  width: 100%;
  height: 100%;
  max-height: 200px;
  max-width: 400px;
`;

const MinistryInfo = styled.div`
  font-weight: bold;
  color: var(--primaryDark);
  font-size: 0.9rem;
  grid-area: info;
  text-align: center;
  @media (min-width: 660px) {
    text-align: left;
  }
`;

const MinistryDescription = styled.div`
  font-size: 0.9rem;
  grid-area: description;
  text-align: center;
  @media (min-width: 660px) {
    text-align: left;
  }
`;
