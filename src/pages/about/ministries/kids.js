import React from 'react';
import { graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import Button from '../../../components/Button';

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

      {data.programs.edges.map(({ program }, index) => (
        <Section dark={index % 2 === 1} key={program.id}>
          <Title>{program.title}</Title>
          <MinistrySection>
            <Image fluid={program.image.fluid} />
            <MinistryInfo>
              <div style={{ fontWeight: 'bold' }}>
                {program.dayOfWeek} {program.startTime}-{program.endTime}
              </div>
              <div style={{ fontWeight: 'bold' }}>
                Location: {program.location}
              </div>
              <div style={{ fontWeight: 'bold' }}>Ages: {program.ageRange}</div>
            </MinistryInfo>
            <MinistryDescription>
              {program.description.description}
            </MinistryDescription>
          </MinistrySection>
        </Section>
      ))}

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

const MinistrySection = styled.div`
  display: grid;
  grid-template-areas:
    'picture'
    'info'
    'description';
  grid-gap: 1rem;
  width: 100%;
  max-width: 700px;
  @media (min-width: 660px) {
    grid-template-columns: 40% 1fr;
    grid-column-gap: 2rem;
    grid-template-rows: auto auto;
    grid-template-areas:
      'picture info'
      'picture description';

    ${props =>
      props.flip &&
      css`
        grid-template-columns: 1fr 40%;
        grid-template-areas:
          'info picture'
          'description picture';
        text-align: right;
      `}
  }
`;

const Image = styled(Img)`
  grid-area: picture;
  width: 100%;
`;

const MinistryInfo = styled.div`
  font-weight: bold;
  color: var(--primaryDark);
  font-size: 0.9rem;
  grid-area: info;
`;

const MinistryDescription = styled.div`
  font-size: 0.9rem;
  grid-area: description;
`;

const TextMessageLink = styled.a`
  /* @media (min-width: 600px) {
    display: none;
  } */
`;
