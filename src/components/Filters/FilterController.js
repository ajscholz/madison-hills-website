import React, { useState, useMemo, useRef, useEffect } from 'react';
import Filter from './Filter';
import List from './List';
import styled from 'styled-components';
import Backdrop from '../Backdrop';
import fromEntries from 'object.fromentries';

// import FilterClearButton from './FilterClearButton';

const FilterController = ({ state, filterData, listData }) => {
  // create an array of key/value pairs to transform back into a useable object
  const initialState = useMemo(() =>
    fromEntries(
      Object.keys(filterData).map(key => {
        return [
          key,
          {
            selected: [],
            unselected: filterData[key],
          },
        ];
      })
    )
  );
  const [filter, setFilter] = useState(initialState);
  const [showFilters, setShowFilters] = state;
  const filterRef = useRef();
  useEffect(() => {
    filterRef.current = filter;
  }, [showFilters]);

  const clearFilters = () => setFilter(initialState);

  const update = (filterType, newState) => {
    setFilter({
      ...filter,
      [filterType]: newState,
    });
  };

  return (
    <>
      {showFilters && (
        <>
          <Backdrop click={setShowFilters} />
          <FilterContainer>
            {/* <Heading>
            <h2>Filters</h2>
          </Heading> */}
            <Body>
              {Object.keys(filterData).map(item => (
                <Filter
                  data={filter[item]}
                  filterType={item}
                  update={update}
                  key={item}
                />
              ))}
            </Body>
            <Footer>
              <button
                disabled={filterRef.current === filter}
                onClick={() => {
                  filterRef.current = filter;
                  setShowFilters(false);
                }}
              >{`Apply and Close`}</button>
              <div>
                <button
                  onClick={() => clearFilters()}
                  disabled={
                    !Object.keys(filter).some(
                      key => filter[key].selected.length !== 0
                    )
                  }
                >
                  {`Clear All Filters`}
                </button>
                <button
                  onClick={() => {
                    setShowFilters(false);
                    setFilter(filterRef.current);
                  }}
                >{`Cancel and Close`}</button>
              </div>
            </Footer>
          </FilterContainer>
        </>
      )}
      <div className="container" style={{ width: '100%', textAlign: 'center' }}>
        {/* <h2>Messages</h2> */}
        <List filters={filter} data={listData} />
      </div>
    </>
  );
};

export default FilterController;

const FilterContainer = styled.div`
  padding: 1em;
  padding-top: 5vh;
  position: fixed;
  z-index: 150;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 576px;
  max-height: 100%;
  background: rgba(242, 238, 238, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (min-width: 360px) {
    padding: 2em;
    padding-top: 5vh;
  }
  @media (min-width: 400px) {
    padding: 3em;
    padding-top: 5vh;
  }
  @media (min-width: 576px) {
    padding: 4em;
    padding-top: 5vh;
    width: 90%;
    max-width: 500px;
    height: 90%;
    box-shadow: var(--shadow5);
    top: 5%;
    left: calc(50% - 250px);
  }
  @media (min-height: 800px) {
    max-height: 700px;
    top: calc(50% - 350px);
  }
`;

// const Heading = styled.div`
//   flex-basis: fit-content;
// `;

const Body = styled.div`
  flex-shrink: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: auto;
`;

const Footer = styled.div`
  flex-basis: fit-content;
  flex-shrink: 0;
  & button {
    background: var(--primary);
    font-size: 0.8rem;
    width: 100%;
    border: none;
    padding: 0.75em;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    & button {
      background: var(--danger);
      width: 50%;
      margin-top: 0.5em;
      &:first-of-type {
        margin-right: 0.5em;
      }
      &:disabled {
        background: #ffb9ac;
        cursor: default;
      }
    }
  }
`;
