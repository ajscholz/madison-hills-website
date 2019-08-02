import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default props => {
  return (
    <MinistryCard>
      <Header>
        <Img fixed={props.image} />
        <Title>{props.title}</Title>
      </Header>
      <Divider />
      <Body>{props.description}</Body>
      {props.link && (
        <Link href={props.link} rel="noopener noreferrer" target="_blank">
          Learn More
        </Link>
      )}
    </MinistryCard>
  );
};

const MinistryCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  max-width: 350px;
  /* height: auto; */
  max-height: max-content;
  background: white;
  padding: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 476px) {
    margin: 1rem;
  }
`;

const Header = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin: 1rem 0 0 0;
  text-align: center;
`;

const Divider = styled.div`
  width: 60%;
  height: 2px;
  background: var(--primary);
  margin: 1.5rem auto;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
  font-size: 0.8rem;
`;

const Link = styled.a`
  align-self: flex-end;
  text-transform: uppercase;
  color: var(--black);
  opacity: 0.6;
  font-weight: bold;
  font-size: 0.6rem;
  margin-top: 2rem;
`;
