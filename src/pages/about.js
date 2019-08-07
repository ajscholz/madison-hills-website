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

import ministries from '../utils/ministries';

const about = ({ data }) => (
  <>
    <Seo title="About" image={data.hero.image.src}></Seo>
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
    <Section dark>
      <Title>Our Ministries</Title>
      <GridContainer>
        {ministries.map(ministry => (
          <Link to={ministry.path} key={ministry.name}>
            <Button>{ministry.name}</Button>
          </Link>
        ))}
      </GridContainer>
    </Section>
    <Section wide>
      <Title>What We Believe</Title>
      <Accordion beliefs={data.beliefs.edges} />
    </Section>
  </>
);

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  justify-items: center;
`;

export default about;

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "About" }) {
      image: pageBannerImage {
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
  }
`;
