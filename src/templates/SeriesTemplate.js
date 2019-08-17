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

import { FaCalendar } from 'react-icons/fa';

const SeriesTemplate = props => {
  const { series } = props.data;
  const { title, start, end, image, description, messages } = series;
  return (
    <>
      <SEO title={title} />
      {/* <StyledHeroImage image={image.fluid} /> */}

      <SeriesSection>
        <Img fluid={image.fluid} />
        <Info>
          <Title>{title}</Title>
          <h5>
            {' '}
            <FaCalendar style={{ display: 'inline-block' }} />
            {start} - {end}
          </h5>
          <p>{description.content[0].content[0].description}</p>
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
    margin-bottom: 2rem;
  }
  & > h5 {
    color: lightgrey;
    display: flex;
    align-items: center;
    opacity: 0.8;
    margin: 0.5rem 0;
    svg {
      margin-right: 0.5rem;
      opacity: 0.8;
      position: relative;
      top: -1px;
    }
  }
  & > p {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0;
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
      description: seriesDescription {
        content {
          content {
            description: value
          }
        }
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
