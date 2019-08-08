import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import MinistryList from '../../../components/MinistryList';

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Kids" }) {
      image: pageBannerImage {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
    programs: allContentfulPrograms(
      filter: { ministryArea: { eq: "Kids" } }
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        program: node {
          id
          title
          dayOfWeek
          startTime
          endTime
          location
          ageRange
          description {
            description
          }
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

export default ({ data }) => {
  return (
    <>
      <Seo title="Madison Hills Kids Ministry" image={data.hero.image.src} />
      <HeroImage image={data.hero.image.fluid}>Kids Ministry</HeroImage>

      <MinistryList programs={data.programs.edges} />

      <Section dark>
        <Title>Stay In the Loop</Title>
        <div>
          Text "mhcckidn" to 81010 or click the button below to join our text
          list.
        </div>
        <TextMessageLink href="sms://81010?body=%40mhcckidn">
          <Button style={{ margin: '1rem' }}>Text Us Now</Button>
        </TextMessageLink>
      </Section>

      <Section>
        <Title>What about my teens?</Title>
        <Button as={Link} to="/about/ministries/teens">
          Teens Page
        </Button>
      </Section>
    </>
  );
};

const TextMessageLink = styled.a`
  /* @media (min-width: 600px) {
    display: none;
  } */
`;
