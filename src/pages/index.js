import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../components/Layout/HeroImage';
import SEO from '../components/Seo';
import Title from '../components/Title';
import Section from '../components/Sections/Section';
import ContactForm from '../components/Forms/ContactForm';
import MessageCard from '../components/Cards/MessageCard';

import { FaMapMarkedAlt, FaClock } from 'react-icons/fa';
import IconInfo from '../components/IconInfo';

const IndexPage = ({ data }) => {
  const { page, messages } = data;
  const img = {
    src: page.image.file.url,
    height: page.image.file.details.image.height,
    width: page.image.file.details.image.width,
  };

  return (
    <>
      <SEO title="Home" image={img} />

      <HeroImage
        image={page}
        title="Helping&nbsp;people find&nbsp;and&nbsp;follow Jesus"
        backgroundPosition="26% 20%"
        full
      />

      <Section>
        <Title>{`When & Where`}</Title>
        <InfoWrapper>
          <IconInfo icon={<FaClock alt="time" />}>
            Every Sunday{'9:30 & 10:45'}
          </IconInfo>
          <IconInfo
            icon={<FaMapMarkedAlt alt="location" />}
            link="https://www.google.com/maps/place/Madison+Hills+Christian+Church/@37.763511,-84.2878922,15z/data=!4m5!3m4!1s0x0:0xc78644b99e70ae4f!8m2!3d37.763511!4d-84.2878922"
          >
            {data.site.siteMetadata.address}
            {`${data.site.siteMetadata.city}, ${data.site.siteMetadata.state}`}
          </IconInfo>
        </InfoWrapper>
      </Section>

      <Section dark>
        <Title>Listen to A Recent Message</Title>
        <MessageCard message={messages.all[0]} />
      </Section>

      {/* <Section dark>
        <Title>Upcoming Events</Title>
        <EventsContainer>
          <FlipCard
            image={data.kickball.childImageSharp.fluid}
            title="family kickball"
          />
          <FlipCard
            title="office trivia"
            image={data.theOffice.childImageSharp.fluid}
          />
          <FlipCard
            title="pizza night"
            image={data.larosas.childImageSharp.fluid}
          />
        </EventsContainer>
      </Section> */}

      <Section>
        <Title>Contact Us</Title>
        <ContactForm />
      </Section>
    </>
  );
};

const InfoWrapper = styled.div`
  width: 225px;

  .divider {
    display: none;
    height: auto;
    width: 1px;
    background: var(--tertiary);
    opacity: 0.6;
  }

  & > div:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  @media (min-width: 768px) {
    width: 500px;
    display: flex;
    justify-content: space-between;

    & > div:not(:last-child) {
      margin-bottom: 0;
    }

    & > * {
      width: 200px;
      flex-direction: column;
      text-align: center;
      svg {
        margin: 1rem 0 0.4em;
        font-size: 1.5em;
      }
    }

    .divider {
      display: none;
    }
  }

  @media (min-width: 992px) {
    width: 600px;
  }
`;

// const EventsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   max-width: 700px;
//   justify-content: space-between;
//   align-items: center;
//   @media (min-width: 920px) {
//     max-width: 860px;
//   }
// `;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Home" }) {
      ...HeroImageFragment
    }
    site {
      siteMetadata {
        address
        city
        state
      }
    }

    messages: allContentfulMessage(
      limit: 1
      filter: { communicator: { eq: "Ben Stroup" } }
      sort: { fields: messageDate, order: DESC }
    ) {
      all: nodes {
        ...MessageCardFragment
      }
    }
  }
`;

export default IndexPage;
