import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import MessageCard from '../MessageCard';
import Title from '../Title';
import Chip from '../Chip';
import CardGridContainer from '../CardGridContainer';

import { FaPlus } from 'react-icons/fa';

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
    communicators: allContentfulMessage {
      communicators: distinct(field: communicator)
    }
  }
`;

export default () => {
  const {
    messages,
    communicators: { communicators },
  } = useStaticQuery(query);

  const [commFilter, setCommFilter] = useState([]);
  const [page, setPage] = useState(1);

  let filteredMessages = [];

  messages.edges.forEach(({ message }) => {
    if (commFilter.length === 0 || commFilter.includes(message.communicator))
      filteredMessages.push(message);
  });

  const pages = Math.ceil(filteredMessages.length / 6);

  const startIndex = 6 * page - 6;
  const endIndex = 6 * page;

  const paginatedMessages = filteredMessages.slice(startIndex, endIndex);

  const filterComm = e => {
    const name = e.currentTarget.textContent;
    const pos = commFilter.indexOf(name);

    // if it's not found....
    if (pos === -1) {
      setCommFilter([...commFilter, name]);
    } else {
      // create a new array to manipulate
      const newFilter = [...commFilter];
      // remove the clicked item
      newFilter.splice(pos, 1);
      // update state
      setCommFilter([...newFilter]);
    }
  };

  return (
    <MessageView>
      <Title>Recent Messages</Title>
      <div>Filter Communicator</div>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}
      >
        {communicators.map((communicator, index) => {
          const selected = commFilter.includes(communicator);

          return (
            <Chip key={index} onClick={e => filterComm(e)} selected={selected}>
              <CloseIcon as={FaPlus} />
              {communicator}
            </Chip>
          );
        })}
      </div>
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
    </MessageView>
  );
};

const MessageView = styled.div`
  width: 100%;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseIcon = styled.span`
  display: inline-block;
  margin-right: 5px;
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
