import React from 'react';
import FilterClearButton from './FilterClearButton';
import FilterChip from './FilterChip';
import styled from 'styled-components';
import { GrClear } from 'react-icons/gr';
// helper functions to add or remove from an array - don't need
// instantiated on every render

const addTodata = (arr, item) => arr.concat([item]).sort();
const removeFromdata = (arr, item) =>
  arr.filter(el => {
    return el !== item;
  });

const Filter = ({ data, filterType, update, className }) => {
  const noFilters = data.selected.length === 0;

  // create a new array with key/value pairs based on whether the item is selected or not
  const dataArr = noFilters
    ? // if there are no filters just create a new array with every key/falue pair set to false
      data.unselected.map(i => [i, false])
    : data.selected
        // create a new array for all the selected items
        .map(i => [i, true])
        // concat with new array for all the unselected items
        .concat(data.unselected.map(i => [i, false]))
        // sort the concatted array to alphabetize
        .sort();

  return (
    <div className={className}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <h3>{filterType}</h3>
        <div
          style={{
            display: 'flex',
            marginBottom: '3.75px',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{ fontSize: '.8em', marginRight: '.5em' }}
          >{`${data.selected.length} selected`}</span>
          <FilterClearButton
            disabled={noFilters}
            click={() =>
              update(filterType, {
                selected: [],
                unselected: data.unselected.concat(data.selected).sort(),
              })
            }
          >
            <GrClear />
          </FilterClearButton>
        </div>
      </div>

      <ChipContainer>
        {dataArr.map(item => {
          return (
            <FilterChip
              className={`filter-chip ${item[1] ? 'active' : ''}`}
              active={item[1]}
              click={() => {
                update(filterType, {
                  selected: item[1]
                    ? removeFromdata(data.selected, item[0])
                    : addTodata(data.selected, item[0]),
                  unselected: item[1]
                    ? addTodata(data.unselected, item[0])
                    : removeFromdata(data.unselected, item[0]),
                });
              }}
              key={item[0].replace(/ /g, '')}
            >
              {item[0]}
            </FilterChip>
          );
        })}
      </ChipContainer>
    </div>
  );
};

export default styled(Filter)`
  margin-bottom: 1.5em;
  position: relative;

  & h3 {
    text-transform: capitalize;
    margin-bottom: 0.2em;
  }
  & ${FilterClearButton} {
    /* position: absolute; */
    border: none;
    top: 2px;
    right: 0;
    background: tomato;
    border: 0;
    display: flex;
    align-items: center;
    padding: 0.35em;
    border-radius: 50px;
    &:disabled {
      background: #ffb9ac;
      cursor: default;
    }
  }
`;

const ChipContainer = styled.div`
  margin: -4px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 32px;
  max-height: 65px;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`;
