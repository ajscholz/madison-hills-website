import React from 'react';
import styled from 'styled-components';

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
    font-size: 1.1em;
  }

  & svg {
    display: block;
    color: var(--primary);
    margin-right: 0.6em;
  }

  & p {
    margin: 0;
    font-size: 0.75em;
    & span {
      display: block;
    }
  }
`;
