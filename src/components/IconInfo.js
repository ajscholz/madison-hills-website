import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const IconInfo = ({ icon, alt, children, link }) => {
  // set up some link attributes if I want this to be a link
  let attrs = {};
  if (link) {
    attrs = {
      href: link,
      rel: 'noopener noreferrer',
      target: '_blank',
      as: 'a',
    };
  }
  const length = children.length;

  return (
    <Container {...attrs}>
      <div className="icon">{icon}</div>
      <p>
        {children.map((child, index) => (
          <span key={index}>
            {child}
            {index < length && ' '}
          </span>
        ))}
      </p>
    </Container>
  );
};

export default IconInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  .icon {
    /* border: 1px solid blue; */
    font-size: 1.1em;
  }

  & svg {
    display: block;
    color: var(--primary);
    margin-right: 0.6em;
  }

  & p {
    /* border: 1px solid green; */
    margin: 0;
    font-size: 0.75em;
    & span {
      display: block;
    }
  }
  /* width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  :first-of-type {
    padding-bottom: 2rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    :first-of-type {
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
  @media (min-width: 662px) {
  } */
`;

const StyledIcon = styled(Icon)`
  /* font-size: 1.5rem;
  color: var(--primary);
  width: 100%;
  margin-bottom: 1rem; */
`;
