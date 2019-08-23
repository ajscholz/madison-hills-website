import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../components/HeroImage';
import SEO from '../components/Seo';
import Title from '../components/Title';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import FlipCard from '../components/FlipCard';

import { FaMapMarkedAlt, FaClock } from 'react-icons/fa';
import IconInfo from '../components/IconInfo';

const IndexPage = ({ data }) => {
  const {
    page: { image },
  } = data;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  return (
    <>
      <SEO title="Home" image={img} />

      <HeroImage
        image={image.fluid}
        title="Helping&nbsp;people find&nbsp;and&nbsp;follow Jesus"
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
      </Section>

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

const EventsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 920px) {
    max-width: 860px;
  }
`;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Home" }) {
      image: bannerImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          url
          details {
            image {
              height
              width
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        address
        city
        state
      }
    }
    kickball: file(name: { eq: "kickball" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    larosas: file(name: { eq: "larosas" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theOffice: file(name: { eq: "the-office" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
