import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Section from './Section';

export default ({ ministry }) => (
  <MinistrySection key={ministry.id}>
    <GridContainer>
      <Image fluid={ministry.image.fluid} imgStyle={{ objectFit: 'contain' }} />
      <MinistryInfo>
        <div style={{ fontWeight: 'bold' }}>
          {ministry.dayOfWeek} {ministry.startTime}-{ministry.endTime}
        </div>
        <div style={{ fontWeight: 'bold' }}>Location: {ministry.location}</div>
        <div style={{ fontWeight: 'bold' }}>Ages: {ministry.ageRange}</div>
      </MinistryInfo>
      <MinistryDescription>
        {ministry.description.description}
      </MinistryDescription>
    </GridContainer>
  </MinistrySection>
);

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
