import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useSpring, animated as a } from 'react-spring';

const EventCard = ({ image, title }) => {
  const [flipped, setFlipped] = useState(false);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  console.log(image);
  const backgroundFluidImageStack = [
    image,
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
  ].reverse();
  return (
    <StyledCard onClick={() => setFlipped(state => !state)}>
      <CardFront fluid={backgroundFluidImageStack} style={{ transform }}>
        <Text>{title}</Text>
      </CardFront>
      <CardBack
        style={{
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      >
        This is the back of the card.
      </CardBack>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  will-change: transform;
  @media (max-width: 499px) {
    &:not(:last-of-type) {
      margin-bottom: 1.2rem;
    }
  }
  @media (min-width: 500px) and (max-width: 661px) {
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

const StyledBackground = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 8px;
  overflow: hidden;
  backface-visibility: hidden;
  @media (min-width: 920px) {
    padding: 2.5rem;
  }
`;

const CardFront = a(StyledBackground);

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
  @media (min-width: 900px) {
    font-size: 1.8em;
  }
`;

const CardBack = styled(a.div)`
  height: 100%;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  backface-visibility: hidden;
  background: var(--primaryDark);
  @media (min-width: 920px) {
    padding: 2.5rem;
  }
`;

export default EventCard;
