import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const EventCard = ({ image, title }) => {
  const backgroundFluidImageStack = [
    image,
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
  ].reverse();
  return (
    <StyledBackgroundImage fluid={backgroundFluidImageStack}>
      <Text>{title}</Text>
    </StyledBackgroundImage>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media (max-width: 499px) {
    &:not(:last-of-type) {
      margin-bottom: 1.2rem;
    }
  }
  @media (min-width: 500px) and (max-with: 661px) {
    height: 100px;
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
  @media (min-width: 662px) and (max-width: 766px) {
    height: 140px;
    &:not(:last-of-type) {
      margin-bottom: 1.8rem;
    }
  }
  @media (min-width: 767px) {
    width: 200px;
    height: 300px;
    margin: 0 2rem 0 2rem;
    padding: 1rem;
    &:first-of-type,
    &:last-of-type {
      margin: 0;
    }
  }
  @media (min-width: 920px) {
    width: 250px;
    height: 375px;
  }
`;

const Text = styled.h3`
  text-align: center;
  text-transform: capitalize;
  margin: 0;
  align-self: center;
  @media (min-width: 500px) {
    font-size: 1.3em;
  }
  @media (min-width: 662px) {
    font-size: 1.6em;
  }
`;

export default EventCard;
