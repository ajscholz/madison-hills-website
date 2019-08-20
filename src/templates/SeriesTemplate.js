import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import MessageCard from '../components/MessageCard';
import CardGridContainer from '../components/CardGridContainer';
import Button from '../components/Button';
import SEO from '../components/Seo';
import Date from '../components/Metadata/Date';
import Metadata from '../components/Metadata/Metadata';

import ContentfulRichText from '../components/ContentfulRichText';

const SeriesTemplate = props => {
  const { series } = props.data;
  const {
    title,
    start,
    end,
    image,
    description: { json },
    messages,
  } = series;

  return (
    <>
      <SEO title={title} />

      <SeriesSection>
        <Img fluid={image.fluid} />
        <Info>
          <Title>{title}</Title>
          <ContentfulRichText content={json} />
          <Metadata>
            <Date icon={true}>
              {start} - {end}
            </Date>
          </Metadata>
        </Info>
      </SeriesSection>

      {messages !== null && (
        <Section>
          <Title>Messages in this series</Title>
          <CardGridContainer>
            {messages.map(message => (
              <MessageCard message={message} key={message.id} />
            ))}
          </CardGridContainer>
        </Section>
      )}
      <Section>
        <Button>Series Archive</Button>
      </Section>
    </>
  );
};

const SeriesSection = styled(Section)`
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40vh auto;
  .gatsby-image-wrapper {
    height: 100%;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 40vh;
    & > img {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const Info = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  & > ${Title} {
    margin-bottom: 1.2rem;
  }
  & > p {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0;
    :last-of-type {
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 576px) {
    padding: 3rem;
  }
  @media (min-width: 1000px) {
    margin: 0;
    align-self: start;
  }
`;

export default SeriesTemplate;

export const query = graphql`
  query($id: String!) {
    series: contentfulMessageSeries(contentful_id: { eq: $id }) {
      title: seriesTitle
      start: seriesStartDate(formatString: "M/D/YYYY")
      end: seriesEndDate(formatString: "M/D/YYYY")
      image: seriesGraphic {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
      description: childContentfulMessageSeriesSeriesDescriptionRichTextNode {
        json
      }
      messages: message {
        id: contentful_id
        title: messageTitle
        date: messageDate
        communicator
        image: messagePhoto {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
