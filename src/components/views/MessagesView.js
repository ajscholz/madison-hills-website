import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import MessageCard from '../MessageCard';
import Title from '../Title';
import Chip from '../Chip';

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
      <div>Filter By:</div>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}
      >
        Communicator:{' '}
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
      <GridContainer>
        {messages.edges.map(({ message }) => {
          return commFilter.length === 0 ? (
            <MessageCard message={message} key={message.id} />
          ) : commFilter.includes(message.communicator) ? (
            <MessageCard message={message} key={message.id} />
          ) : null;
        })}
      </GridContainer>
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275.83px, 1fr));
  grid-gap: 2rem;
  width: 100%;
  max-width: 1110px;
`;

const CloseIcon = styled.span`
  display: inline-block;
  margin-right: 5px;
`;
