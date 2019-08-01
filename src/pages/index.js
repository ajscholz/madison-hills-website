import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../components/HeroImage';
import SEO from '../components/Seo';
import Title from '../components/Title';
import Section from '../components/Section';
import Icon from '../components/Icon';
import ContactForm from '../components/ContactForm';
import EventCard from '../components/EventCard';

import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export const data = graphql`
  query MyQuery {
    hero: file(name: { eq: "index-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        address
        city
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

const IndexPage = ({ data, className }) => {
  return (
    <>
      <SEO title="Home" />
      <HeroImage image={data.hero.childImageSharp.fluid} full>
        For Richmond.
        <br />
        For You.
      </HeroImage>
      <Section large>
        <Title>Helping people find and follow Jesus</Title>
        <InfoWrapper>
          <InfoContainer>
            <StyledIcon icon={FaClock} className={className} />
            <H3>{`Sundays, 9:30 & 10:45a`}</H3>
          </InfoContainer>
          <InfoContainer>
            <StyledIcon icon={FaMapMarkerAlt} className={className} />
            <H3>
              {data.site.siteMetadata.address}, {data.site.siteMetadata.city}
            </H3>
          </InfoContainer>
        </InfoWrapper>
      </Section>
      <Section dark padSide="5vw">
        <Title>Upcoming Events</Title>
        <EventsContainer>
          <EventCard
            image={data.kickball.childImageSharp.fluid}
            title="family kickball"
          />
          <EventCard
            title="office trivia"
            image={data.theOffice.childImageSharp.fluid}
          />
          <EventCard
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 576px) {
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  :first-of-type {
    margin-bottom: 0.75rem;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  color: var(--primary);
  margin-right: 20px;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  margin: 0;
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

export default IndexPage;
