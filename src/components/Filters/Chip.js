import React from 'react';
import styled from 'styled-components';
import { FiX, FiCheck } from 'react-icons/fi';
import { a, useSpring, useTransition } from 'react-spring';

const Chip = props => {
  const { text, handleClick, active, filter, func, className } = props;

  const chipStyles = useSpring({
    background: active ? 'var(--primary)' : 'var(--white)',
    color: active ? 'var(--white)' : 'var(--primary)',
  });

  const transitions = useTransition(active, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // unique: true,
  });

  return (
    <a.button
      className={className}
      onClick={() => handleClick(text, filter, func)}
      style={chipStyles}
    >
      {transitions.map(({ item, key, props }) =>
        item ? (
          <a.div style={props}>
            <FiCheck />
          </a.div>
        ) : (
          <a.div style={props}>
            <FiX />
          </a.div>
        )
      )}
      <p>{text}</p>
    </a.button>
  );
};

export default styled(Chip)`
  background-color: transparent;
  height: max-content;
  max-width: calc(100% - 1rem);
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 0.5rem;
  margin: 0.4rem;
  font-weight: 400;
  padding: 0.2rem 0.8rem;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  border-radius: 12.5px;
  transition: var(--mainTransition);
  outline: none;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 1rem;
  & div {
    display: flex;
  }
  p {
    white-space: nowrap;
    margin: 0 0 0 1rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    transition: var(--mainTransition);
    font-size: 1em;
  }
`;
