import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import HeroImage from '../components/Layout/HeroImage';
import Section from '../components/Sections/Section';
import Button from '../components/Buttons/Button';
// import { FiFilter } from 'react-icons/fi';

// import FilterController from '../components/Filters/FilterController';
import MessageCard from '../components/Cards/MessageCard';
import SeriesCard from '../components/Cards/SeriesCard';

const MessagesPage = props => {
  const { page, messages, series } = props.data;
  const { image } = page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  // const [showFilters, setShowFilters] = useState(false);
  const [show, setShow] = useState('messages');

  return (
    <>
      <Seo title="Messages" image={img} />

      <HeroImage
        image={image.fluid}
        title="Messages"
        backgroundPosition="50% 20%"
      >
        <StyledButton
          small
          onClick={() => setShow(show === 'messages' ? 'series' : 'messages')}
        >{`View ${show === 'messages' ? 'Series' : 'Messages'}`}</StyledButton>
      </HeroImage>

      <Container>
        <Row>
          {show === 'messages'
            ? messages.all.map(message => (
                <Col key={message.id}>
                  <MessageCard message={message} />
                </Col>
              ))
            : series.all.map(series => (
                <Col key={series.id}>
                  <SeriesCard series={series} />
                </Col>
              ))}
        </Row>
        {/* <FilterButton onClick={() => setShowFilters(!showFilters)}>
          <FiFilter size={36} />
        </FilterButton>
        <FilterController
          state={[showFilters, setShowFilters]}
          filterData={messageTags}
          listData={messages}
        /> */}
      </Container>
    </>
  );
};

export default MessagesPage;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Messages" }) {
      ...HeroImageFragment
    }
    messages: allContentfulMessage(sort: { fields: messageDate, order: DESC }) {
      all: nodes {
        ...MessageCardFragment
      }
    }
    series: allContentfulMessageSeries(
      sort: { fields: seriesStartDate, order: DESC }
    ) {
      all: nodes {
        ...SeriesCardFragment
      }
    }
  }
`;

// const FilterButton = styled.button`
//   padding: 1em;
//   align-self: flex-end;
//   background: red;
//   display: flex;
//   position: fixed;
//   z-index: 99;
//   bottom: 20px;
//   right: 20px;
//   align-items: center;
//   border: none;
//   outline: none;
//   border-radius: 50%;
//   background: var(--primary);
//   color: var(--white);
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
//   &:focus {
//     background: var(--primaryDark);
//   }
// `;

const Container = styled(Section)`
  justify-content: stretch;
`;

const Row = styled.div`
  margin: 0 -16px;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Col = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 662px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    width: 33.33%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2em;
`;
