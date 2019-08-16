import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import MessageCard from '../MessageCard';
import Title from '../Title';

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
  }
`;

export default () => {
  const { messages } = useStaticQuery(query);

  return (
    <MessageView>
      <Title>Recent Messages</Title>
      <GridContainer>
        {messages.edges.map(({ message }) => {
          return <MessageCard message={message} key={message.id} />;
        })}
      </GridContainer>
    </MessageView>
  );
};

const MessageView = styled.div`
  width: 100%;
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
