import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FaPlus, FaChevronRight } from 'react-icons/fa';

const Chips = props => {
  const { items, selected, click, filterName, className } = props;

  return (
    <div className={className}>
      <Header>
        <FaChevronRight
          style={{ position: 'relative', bottom: '1px', marginRight: '.2rem' }}
        />
        {`${filterName.substring(0, filterName.length - 1)}`}
      </Header>
      <List>
        {items.map((item, index) => {
          return (
            <Chip
              key={index}
              onClick={e => click(e.currentTarget.textContent)}
              selected={selected.includes(item)}
            >
              <CloseIcon as={FaPlus} />
              <p>{item}</p>
            </Chip>
          );
        })}
      </List>
    </div>
  );
};

export default styled(Chips)`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const Header = styled.h4`
  position: sticky;
  top: 0;
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 0.2rem;
  text-transform: capitalize;
  color: var(--secondary);
  display: flex;
  align-items: center;
  background: var(--white);
  z-index: 250;
`;

const CloseIcon = styled.span`
  margin-right: 5px;
  flex-shrink: 0;
`;

const Chip = styled.button`
  background-color: transparent;
  height: max-content;
  max-width: calc(100% - 1rem);
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
  position: relative;
  margin-left: 1rem;
  p {
    white-space: nowrap;
    margin: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
  width: 100%;
  margin-bottom: 25px;
`;

Chips.propTypes = {
  items: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};
