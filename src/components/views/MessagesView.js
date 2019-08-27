import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { FaFilter, FaBan } from 'react-icons/fa';

import MessageCard from '../MessageCard';
import Title from '../Title';
import Chips from '../Filters/Chips';
import CardGridContainer from '../CardGridContainer';
import { useBrowserWidth } from '../../context/BrowserWidthContext';

import { MessageViewContext } from '../../context/MessageViewContext';
import Filters from '../Filters/Filters';

export default () => {
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const width = useBrowserWidth();
  if (width >= 992 && filtersOpen === false) setFiltersOpen(true);

  const [views, setViews] = useContext(MessageViewContext);
  const {
    filters: { communicators: contextCommunicators },
  } = views;

  const { messages, tags } = useStaticQuery(query);

  let filteredMessages = [];

  messages.edges.forEach(({ message }) => {
    if (
      contextCommunicators.length === 0 ||
      contextCommunicators.includes(message.communicator)
    )
      filteredMessages.push(message);
  });

  const pages = Math.ceil(filteredMessages.length / 6);

  const startIndex = 6 * page - 6;
  const endIndex = 6 * page;

  const paginatedMessages = filteredMessages.slice(startIndex, endIndex);

  const filterComm = name => {
    const pos = contextCommunicators.indexOf(name);

    // if it's not found....
    if (pos === -1) {
      setViews({
        ...views,
        filters: {
          ...views.filters,
          communicators: [...contextCommunicators, name],
        },
      });
    } else {
      // create a new array to manipulate
      const newFilter = [...contextCommunicators];
      // remove the clicked item
      newFilter.splice(pos, 1);
      // update state
      setViews({
        ...views,
        filters: {
          ...views.filters,
          communicators: [...newFilter],
        },
      });
    }
  };

  const resetFilters = () => {
    setViews({
      ...views,
      filters: {
        communicators: [],
        topics: [],
      },
    });
    setPage(1);
  };

  return (
    <MessageView>
      <Title>Recent Messages</Title>

      <ButtonWrapper>
        <FilterButton onClick={() => setFiltersOpen(true)}>
          <FaFilter />
          Filter Messages
        </FilterButton>
        <ClearButton onClick={() => resetFilters()}>
          <FaBan />
          Clear Filters
        </ClearButton>
      </ButtonWrapper>

      {/* {filtersOpen && ( */}
      <Filters open={filtersOpen} click={setFiltersOpen} reset={resetFilters}>
        <Chips
          filterName="communicators"
          items={[
            ...tags.communicators,
            'This is a long name that i am putting here for a test',
          ]}
          selected={contextCommunicators}
          click={filterComm}
        />
        <Chips
          filterName="topics"
          items={[...tags.topics, 'another', 'anotehr 2']}
          selected={[]}
          click={() => null}
        />
      </Filters>
      {/* )} */}
      <CardsWrapper>
        {filteredMessages.length === 0 && (
          <p
            style={{
              margin: '0 3rem',
              fontSize: '1rem',
              color: 'var(--black)',
            }}
          >
            No messages available with the selected filters.
          </p>
        )}
        <CardGridContainer>
          {paginatedMessages.map(message => {
            return <MessageCard message={message} key={message.id} />;
          })}
        </CardGridContainer>

        <Pagination>
          {[...Array(pages)].map((item, index) => {
            const thisPage = index + 1;
            return (
              <PaginationButton
                onClick={() => setPage(thisPage)}
                selected={page === thisPage}
                disabled={page === thisPage}
                key={index}
              >
                {thisPage}
              </PaginationButton>
            );
          })}
        </Pagination>
      </CardsWrapper>
    </MessageView>
  );
};

const MessageView = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (min-width: 992px) {
    min-height: 600px;
    display: grid;
    grid-template:
      'title title' auto
      'filters cards' minmax(200px, 1fr)
      / 200px 1fr;

    & ${Title} {
      grid-area: title;
      margin-left: auto;
      margin-right: auto;
      width: auto;
      margin-bottom: 3rem;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
  border: 2px solid var(--primary);
  border-radius: 8px;
  color: var(--primary);
  font-size: 1rem;
  background: transparent;
  transition: var(--mainTransition);
  outline: 0;
  position: relative;
  display: flex;
  justify-content: center;
  &:hover :not(:disabled) {
    background: var(--primary);
    color: var(--white);
  }
  &:disabled {
    cursor: default;
  }
  ${props =>
    props.selected &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 40%;
        bottom: 4px;
        height: 2px;
        background: var(--primary);
      }
    `}
`;

const ButtonBase = styled.button`
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  & > svg {
    display: block;
    margin-right: 0.25rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 992px) {
    display: none;
  }
`;

const FilterButton = styled(ButtonBase)`
  color: var(--primaryDark);
`;

const ClearButton = styled(ButtonBase)`
  color: var(--danger);
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 992px) {
    grid-area: cards;
    align-self: start;
    min-height: 400px;
    & > ${CardGridContainer} {
      max-width: unset;
    }
  }
`;

const query = graphql`
  {
    messages: allContentfulMessage(sort: { fields: messageDate, order: DESC }) {
      edges {
        message: node {
          id: contentful_id
          title: messageTitle
          date: messageDate(formatString: "MMM DD, YYYY")
          communicator
          image: messagePhoto {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          series: messageSeries {
            title: seriesTitle
          }
        }
      }
    }
    tags: allContentfulMessage {
      topics: distinct(field: tags)
      communicators: distinct(field: communicator)
    }
  }
`;
