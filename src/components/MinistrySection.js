import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

const MinistrySection = ({ ministry, reverse }) => (
  <GridContainer reverse={reverse}>
    <Image fluid={ministry.image.fluid} imgStyle={{ objectFit: 'contain' }} />
    <MinistryInfo>
      <h4>
        {ministry.dayOfWeek} {ministry.startTime}-{ministry.endTime}
      </h4>
      <h4>Location: {ministry.location}</h4>
      <h4>Ages: {ministry.ageRange}</h4>
    </MinistryInfo>
    <MinistryDescription>
      {ministry.description.description}
    </MinistryDescription>
  </GridContainer>
);

export default MinistrySection;

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
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'picture info'
      'picture description';
    grid-column-gap: 2rem;
    justify-items: start;
    text-align: left;

    ${props =>
      props.reverse &&
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
  width: 100%;
  font-weight: bold;
  color: var(--primaryDark);
  font-size: 0.9rem;
  grid-area: info;
  & > h4 {
    margin: 0;
    font-weight: bold;
  }
`;

const MinistryDescription = styled.p`
  font-size: 0.9rem;
  grid-area: description;
  margin: 0;
`;
