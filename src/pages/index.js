import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../components/HeroImage';
import SEO from '../components/Seo';
import Title from '../components/Title';
import Section from '../components/Section';
import Icon from '../components/Icon';
import ContactForm from '../components/ContactForm';
import FlipCard from '../components/FlipCard';

import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export const data = graphql`
  query MyQuery {
    hero: contentfulPageBannerImages(page: { eq: "Home" }) {
      image: pageBannerImage {
        file {
          url
          details {
            image {
              height
              width
            }
          }
        }
        fluid {
          ...GatsbyContentfulFluid
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

const IndexPage = ({ data, className }) => {
  const image = {src: data.hero.image.file.url, height: data.hero.image.file.details.image.height, width: data.hero.image.file.details.image.width}

  return (
    <>
      <SEO title="Home" image={image} />
      <HeroImage image={data.hero.image.fluid} full>
        For Richmond
        <br />
        For You
      </HeroImage>
      <Section large>
        <Title>Helping people find and follow Jesus</Title>
        <InfoWrapper>
          <InfoContainer>
            <StyledIcon icon={FaClock} className={className} />
            <InfoText>
              {`Sundays`}
              <br />
              {`9:30 & 10:45a`}
            </InfoText>
          </InfoContainer>
          <InfoContainer>
            <StyledIcon icon={FaMapMarkerAlt} className={className} />
            <InfoText>
              {data.site.siteMetadata.address}
              <br />
              {data.site.siteMetadata.city}, {data.site.siteMetadata.state}
            </InfoText>
          </InfoContainer>
        </InfoWrapper>
      </Section>
      <Section dark padSide="5vw">
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
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  :first-of-type {
    padding-bottom: 2rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    :first-of-type {
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 1.5rem;
  color: var(--primary);
  width: 100%;
  margin-bottom: 1rem;
`;

const InfoText = styled.h3`
  font-size: 1rem;
  margin: 0;
  text-align: center;
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
