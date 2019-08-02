import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../../../components/HeroImage';
import Banner from '../../../components/Banner';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import MinistryCard from '../../../components/MinistryCard';
import GridContainer from '../../../components/GridContainer';
import FlexContainer from '../../../components/FlexContainer';

export const data = graphql`
  {
    heroImage: file(name: { eq: "community-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ministries: allContentfulCommunityMinistries {
      edges {
        ministry: node {
          contentful_id
          name
          link
          description {
            description
          }
          image {
            fixed(height: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;

const teens = ({ data }) => {
  return (
    <>
      <Seo
        title="Community Ministries"
        image="src/images/community-banner.jpg"
      />
      <HeroImage image={data.heroImage.childImageSharp.fluid}>
        <Banner>Community Ministries</Banner>
      </HeroImage>
      <Section>
        <Title>For Richmond</Title>
        <Subtitle>{`We aren't interested in building our own kingdom. We're interested in building God's Kingdom. Here are some of our partners in Richmond that are making a huge difference.`}</Subtitle>
        {/* <GridContainer> */}
        <FlexContainer>
          {data.ministries.edges.map(({ ministry }) => (
            <MinistryCard
              key={ministry.contentful_id}
              title={ministry.name}
              description={ministry.description.description}
              image={ministry.image.fixed}
              link={ministry.link}
            ></MinistryCard>
          ))}
        </FlexContainer>
        {/* </GridContainer> */}
      </Section>
    </>
  );
};

const Subtitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 650px;
`;

export default teens;
