import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled.button`
  font-size: ${props => (props.small ? '0.75rem' : '0.9rem')};
  padding: 1em 2em;
  background-color: var(--primary);
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  border-radius: ${props =>
    props.circle ? '50%' : props.square ? '0' : '8px'};
  transition: var(--mainTransition);
  border: none;
  box-shadow: var(--shadow2);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: var(--shadow3);
  }
`;

export default Button;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  font-size: 0.7rem;
  margin: 0 0.75rem;
  padding: 0.75em 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  border-radius: 8px;
  transition: var(--mainTransition);
  outline: none;
  box-shadow: var(--shadow2);

  &:hover {
  }
  @media (min-width: 576px) {
    font-size: 0.8rem;
    margin: 0 1rem;
    padding: 1em 2em;
  }
  &:disabled {
    cursor: default;
    background: var(--primary);
    color: var(--white);
    box-shadow: none;
  }
`;

export const LinkButton = props => {
  const { to, children, style } = props;

  return (
    <Button as={Link} to={to} style={style}>
      {children}
    </Button>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
};
