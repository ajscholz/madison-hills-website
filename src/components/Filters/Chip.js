import React from 'react';
import styled from 'styled-components';
import { FiX, FiCheck } from 'react-icons/fi';

const Chip = props => {
  const { text, handleClick, active, filter, func, className } = props;

  return (
    <button
      className={className}
      onClick={() => handleClick(text, filter, func)}
    >
      <ChipContentWrapper>
        {active ? <FiX /> : <FiCheck />}
        {text}
      </ChipContentWrapper>
    </button>
  );
};

export default styled(Chip)`
  padding: 0.5em 3em;
  background: ${props => (props.active ? 'darkslategray' : 'transparent')};
  border: 1px solid darkslategray;
  border-radius: 20px;
  display: block;
  color: ${props => (props.active ? 'white' : 'darkslategray')};
  outline: none;
  cursor: pointer;
  margin-bottom: 0.75em;
  width: max-content;
`;

const ChipContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > svg {
    display: inline-block;
    margin-right: 0.5em;
  }
`;
