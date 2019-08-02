import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import TeamCard from '../components/TeamCard';
// import { List, ListItem } from '../components/List';
import Accordion from '../components/Accordion';
import Button from '../components/Button';

import staff from '../utils/staff';
// import elders from '../utils/elders';
// import deacons from '../utils/deacons';
import beliefs from '../utils/beliefs';
import ministries from '../utils/ministries';

const about = ({ data }) => (
  <>
    <Seo title="About"></Seo>
    <StyledHeroImage image={data.heroImage.childImageSharp.fluid}>
      About
    </StyledHeroImage>
    <Section>
      <Title>Our Team</Title>
      <FlexContainer>
        {/* render a team card for each staff member in the staff array, and dynamically load the graphql image based on their name (key) */}
        {Object.keys(staff).map(key => (
          <TeamCard
            key={key}
            name={staff[key].name}
            jobTitle={staff[key].title}
            image={data[key].childImageSharp.fluid}
            description={staff[key].description}
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
    {/* <Section dark>
      <Title>Our Elders</Title>
      <List>
        {elders.map(elder => (
          <ListItem key={elder}>{elder}</ListItem>
        ))}
      </List>
    </Section>
    <Section>
      <Title>Our Deacons</Title>
      <List>
        {deacons.map(deacon => (
          <ListItem key={deacon}>{deacon}</ListItem>
        ))}
      </List>
    </Section> */}
    <Section wide>
      <Title>What We Believe</Title>
      <Accordion items={beliefs} />
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
    heroImage: file(name: { eq: "about-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ben: file(name: { eq: "team-ben" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lawrence: file(name: { eq: "team-lawrence" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jeremy: file(name: { eq: "team-jeremy" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    steveTerry: file(name: { eq: "team-steveterry" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kim: file(name: { eq: "team-kim" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
