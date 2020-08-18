import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/Layout/HeroImage';
import Section from '../components/Sections/Section';
import { FiFilter } from 'react-icons/fi';

import FilterController from '../components/Filters/FilterController';

const MessagesPage = props => {
  const { page, allContentfulMessage, messageTags } = props.data;
  const { messages } = allContentfulMessage;
  const { image } = page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Seo title="Messages" image={img} />

      <StyledHeroImage image={image.fluid} title="Messages"></StyledHeroImage>

      <Section
        style={{
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <FilterButton onClick={() => setShowFilters(!showFilters)}>
          <FiFilter size={36} />
        </FilterButton>
        <FilterController
          state={[showFilters, setShowFilters]}
          filterData={messageTags}
          listData={messages}
        />
      </Section>
    </>
  );
};

export default MessagesPage;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Messages" }) {
      ...HeroImageFragment
    }
    allContentfulMessage(sort: { fields: messageDate, order: DESC }) {
      messages: nodes {
        ...MessageCardFragment
      }
    }
    messageTags: allContentfulMessage {
      topics: distinct(field: tags)
      communicator: distinct(field: communicator)
      year: distinct(field: year)
    }
  }
`;

const FilterButton = styled.button`
  padding: 1em;
  align-self: flex-end;
  background: red;
  display: flex;
  position: fixed;
  z-index: 99;
  bottom: 20px;
  right: 20px;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:focus {
    background: var(--primaryDark);
  }
`;
