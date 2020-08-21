import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import HeroImage from '../components/Layout/HeroImage';
import Section from '../components/Sections/Section';
import Title from '../components/Title';
import Button from '../components/Buttons/Button';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import ContentfulRichText from '../components/ContentfulRichText';
import VerseSection from '../components/Sections/VerseSection';

import { sectionHelper } from '../utils/helpers';

const JesusPage = ({ data }) => {
  const { page } = data;
  const { image } = page;

  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  let sections = sectionHelper(
    [
      '7azFM2Q72liNatcMvjBGX1',
      '2IKRWW43MC43QBIiqwY3QH',
      '5GRCwmcPxNKWEpZSKE2HiG',
    ],
    data.page.sections
  );

  sections[0].content = (
    <ContentfulRichText content={sections[0].textContent.json} />
  );

  let content = sections[1].contentReferences[0];
  sections[1].content = (
    <VerseSection text={content.text.text} reference={content.reference} />
  );

  sections[2].content = (
    <GridContainer>
      <Image
        fluid={sections[2].image.fluid}
        imgStyle={{ objectPosition: '57% 15%' }}
      />
      <MinistryDescription>
        <ContentfulRichText content={sections[2].textContent.json} />
        <Button>
          <Link to="/visit">Plan A Visit</Link>
        </Button>
      </MinistryDescription>
    </GridContainer>
  );

  return (
    <>
      <Seo title="Jesus" image={img} />

      <HeroImage image={page} backgroundPosition="51% 78%" title="Jesus" />

      {sections.map((section, i) => {
        return (
          <Section key={section.id}>
            {i !== 1 && <Title>{section.title}</Title>}
            {section.content}
          </Section>
        );
      })}
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 200px auto;
  grid-template-areas:
    'picture'
    'description';
  grid-gap: 1rem;
  width: 100%;
  max-width: 700px;
  text-align: center;

  @media (min-width: 660px) {
    max-height: 250px;
    grid-template-columns: 40% 1fr;
    grid-template-rows: 250px;
    grid-template-areas: 'picture description';
    grid-column-gap: 2rem;
    justify-items: start;
  }
`;

const Image = styled(Img)`
  grid-area: picture;
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  max-width: 400px;
  /* object-fit: contain; */
`;

const MinistryDescription = styled.div`
  & > p {
    font-size: 0.9rem;
    grid-area: description;
    margin-top: 0;
    @media (min-width: 660px) {
      text-align: left !important;
    }
  }

  & > button {
    margin: 1.5rem auto 0 auto;
    @media (min-width: 660px) {
      margin: 1.5rem 0 0 0;
    }
  }
`;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Jesus" }) {
      ...HeroImageFragment
      sections: section {
        id: contentful_id
        title
        textContent {
          json
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        contentReferences {
          ... on ContentfulVerse {
            reference
            text {
              text
            }
          }
        }
      }
    }
  }
`;

export default JesusPage;
