import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';

const EventCard = props => {
  const [flipped, set] = useState(false);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <StyledDiv onClick={() => set(state => !state)}>
      <CardFront style={{ transform }}>
        <Img
          fluid={props.image}
          style={{ height: '100%', width: '100%', position: 'relative' }}
        ></Img>
        <Text>{props.title}</Text>
      </CardFront>
      <CardBack
        style={{
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      >
        <p>information here</p>
      </CardBack>
    </StyledDiv>
  );
};

const Card = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  will-change: transform;
  background-size: cover;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardFront = styled(Card)``;

const CardBack = styled(Card)`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primaryDark);
  @media (min-width: 920px) {
    padding: 2.5rem;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 80px;
  margin: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
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

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  text-align: center;
  text-transform: capitalize;
  @media (min-width: 500px) {
    font-size: 1.3em;
  }
  @media (min-width: 662px) {
    font-size: 1.6em;
  }
  @media (min-width: 900px) {
    font-size: 1.8em;
    padding: 2.5rem;
  }
`;

export default EventCard;
