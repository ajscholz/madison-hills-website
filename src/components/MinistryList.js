import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Title from './Title';
import Section from './Section';

export default props => {
  return (
    <>
      {props.programs.map(({ program }, index) => (
        <MinistrySection key={program.id}>
          <Title>{program.title}</Title>
          <GridContainer>
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
          </GridContainer>
        </MinistrySection>
      ))}
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-areas:
    'picture'
    'info'
    'description';
  grid-gap: 1rem;
  width: 100%;
  max-width: 700px;
  text-align: center;

  @media (min-width: 660px) {
    max-height: 250px;
    grid-template-columns: 40% 1fr;
    grid-column-gap: 2rem;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'picture info'
      'picture description';
    justify-items: start;
    text-align: left;
  }
`;

const MinistrySection = styled(Section)`
  &:nth-of-type(even) > ${GridContainer} {
    @media (min-width: 660px) {
      grid-template-columns: 1fr 40%;
      grid-template-areas:
        'info picture'
        'description picture';
      text-align: right;
    }
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
  width: 100%;
  font-weight: bold;
  color: var(--primaryDark);
  font-size: 0.9rem;
  grid-area: info;
`;

const MinistryDescription = styled.div`
  font-size: 0.9rem;
  grid-area: description;
`;
