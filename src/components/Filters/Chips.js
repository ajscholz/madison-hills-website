import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const ChipCreator = props => {
  const { items, selected, click, filterName } = props;

  return (
    <>
      <Header>{`> ${filterName.substring(0, filterName.length - 1)}`}</Header>
      <List>
        {items.map((item, index) => {
          return (
            <Chip
              key={index}
              onClick={e => click(e.currentTarget.textContent)}
              selected={selected.includes(item)}
            >
              <CloseIcon as={FaPlus} />
              {item}
            </Chip>
          );
        })}
      </List>
    </>
  );
};

const Header = styled.h4`
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
  color: var(--secondary);
`;

const CloseIcon = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

const Chip = styled.button`
  background-color: transparent;
  height: max-content;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 0.5rem;
  margin: 0.25rem;
  font-weight: 400;
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  border-radius: 12.5px;
  transition: var(--mainTransition);
  outline: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  position: relative;
  margin-left: 1.5rem;
  svg {
    transition: var(--mainTransition);
    font-size: 1em;
  }
  ${props =>
    props.selected &&
    css`
      background: var(--primary);
      color: var(--white);
      svg {
        transform: rotate(45deg);
      }
    `}
`;

const List = styled.div`
  overflow: scroll;
`;

ChipCreator.propTypes = {
  items: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};

export default ChipCreator;
