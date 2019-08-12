import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import TeamCard from '../components/TeamCard';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import ImageButton from '../components/ImageButton';

const about = ({ data }) => {
  const image = {
    src: data.hero.image.file.url,
    height: data.hero.image.file.details.image.height,
    width: data.hero.image.file.details.image.width,
  };

  console.log(data.ministries.edges);
  return (
    <>
      <Seo title="About" image={image} />
      <StyledHeroImage image={data.hero.image.fluid}>About</StyledHeroImage>

      <Section>
        <Title>Our Team</Title>
        <FlexContainer>
          {data.team.edges.map(({ member }) => (
            <TeamCard
              key={member.contentful_id}
              name={member.name}
              jobTitle={member.title}
              image={member.image.fluid}
              description={member.description}
            />
          ))}
        </FlexContainer>
      </Section>

      <Section style={{ padding: '4rem 0 0' }}>
        <Title>Our Ministries</Title>
        <GridContainer>
          {data.ministries.edges.map(({ ministry }) => (
            <Link
              to={`/about/ministries/${ministry.name.toLowerCase()}`}
              key={ministry.contentful_id}
              aria-label={ministry.name}
              style={{ height: '100%', width: '100%' }}
            >
              <ImageButton image={ministry.image.pageBannerImage}>
                {ministry.name}
              </ImageButton>
            </Link>
          ))}
        </GridContainer>
      </Section>

      <Section>
        <Title>What We Believe</Title>
        <Accordion beliefs={data.beliefs.edges} />
      </Section>
    </>
  );
};

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const GridContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  margin-top: 2rem;
  justify-items: center;
  grid-gap: 2px;
  background: var(--primary);
  @media (min-width: 660px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default about;

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "About" }) {
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
          src
        }
      }
    }
    beliefs: allContentfulBeliefs(sort: { fields: createdAt, order: ASC }) {
      edges {
        belief: node {
          title: beliefTitle
          contentful_id
          references
          description: beliefDescription {
            description: beliefDescription
          }
        }
      }
    }
    team: allContentfulTeamMember(
      filter: { type: { eq: "staff" } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        member: node {
          contentful_id
          name
          title
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    ministries: allContentfulMinistries(
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        ministry: node {
          name
          contentful_id
          image {
            pageBannerImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`;
