import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chip from './Chip';

const Chips = props => {
  const { title, items, state, setState, className } = props;

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
    <>
      <h2>{title}</h2>
      <div className={className}>
        {items.map((item, index) => {
          const active = state.includes(item);
          return (
            <Chip
              active={active}
              filter={state}
              func={setState}
              key={index}
              text={item}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default styled(Chips)`
  width: 100%;
  height: 100%;
  overflow: scroll;
  @media (min-width: 992px) {
    height: unset;
  }
`;

// const Header = styled.h4`
//   position: sticky;
//   top: 0;
//   font-size: 0.8rem;
//   margin-top: 0;
//   margin-bottom: 0.5rem;
//   text-transform: capitalize;
//   color: var(--secondary);
//   display: flex;
//   align-items: center;
//   background: var(--white);
//   z-index: 250;
// `;

// const CloseIcon = styled.span`
//   margin-right: 5px;
//   flex-shrink: 0;
// `;

// const List = styled.div`
//   width: 100%;
//   margin-bottom: 25px;
// `;

Chips.propTypes = {
  items: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};
