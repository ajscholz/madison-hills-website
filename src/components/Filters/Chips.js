import React from 'react';
import styled from 'styled-components';
import Chip from './Chip';

const Chips = props => {
  const { title, items, state, setState } = props;

  const removeArrayItem = (position, ...rest) => {
    rest.splice(position, 1);
    return rest;
  };

  const handleClick = (text, filter, func) => {
    const position = filter.indexOf(text);

    if (position === -1) {
      func([...filter, text]);
    } else {
      func(removeArrayItem(position, ...filter));
    }
  };

  return (
    <div className="Chips">
      <h2>{title}</h2>
      <ChipContainer>
        {items.map((item, index) => (
          <Chip
            active={state.includes(item)}
            filter={state}
            func={setState}
            key={index}
            text={item}
            handleClick={handleClick}
          />
        ))}
      </ChipContainer>
    </div>
  );
};

export default Chips;

const ChipContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  flex-grow: 0;
`;
