import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/Layout/HeroImage';
import Section from '../components/Sections/Section';
import Title from '../components/Title';
import TeamCard from '../components/Cards/TeamCard';
import Accordion from '../components/Accordion';
import ImageButton from '../components/Buttons/ImageButton';

import { sectionHelper } from '../utils/helpers';

const about = ({ data }) => {
  const { image } = data.page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  const sections = sectionHelper(
    [
      '3KsEOEGsu7w6IDlkYavQM4',
      '2y51JvuZ4XxM1wiTC9kqRy',
      'iQqn9gttmnCEbrHeoC4gr',
    ],
    data.page.sections
  );

  console.log(sections);

  sections[0].content = (
    <FlexContainer>
      {sections[0].contentReferences.map(person => (
        <TeamCard
          key={person.id}
          name={person.name}
          jobTitle={person.title}
          image={person.image.fluid}
          // description={person.description}
        />
      ))}
    </FlexContainer>
  );

  sections[1].content = (
    <GridContainer>
      {sections[1].contentReferences.map(ministry => (
        <Link
          to={`/about/ministries/${ministry.name.toLowerCase()}`}
          key={ministry.contentful_id}
          aria-label={ministry.name}
          style={{ height: '100%', width: '100%' }}
        >
          <ImageButton image={ministry.image.bannerImage}>
            {ministry.name}
          </ImageButton>
        </Link>
      ))}
    </GridContainer>
  );

  sections[1].styles = { padding: '4rem 0 0' };

  sections[2].content = <Accordion items={sections[2].contentReferences} />;

  return (
    <>
      <Seo title="About" image={img} />
      <StyledHeroImage image={image.fluid} title="About" />

      {sections.map(section => {
        return (
          <Section key={section.id} style={section.styles}>
            <Title>{section.title}</Title>
            {section.content}
          </Section>
        );
      })}
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
    page: contentfulPages(title: { eq: "About" }) {
      image: bannerImage {
        fluid(quality: 90) {
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
      sections: section {
        id: contentful_id
        title
        contentReferences {
          ... on ContentfulBeliefs {
            title: beliefTitle
            contentful_id
            references
            description: beliefDescription {
              description: beliefDescription
            }
          }
          ... on ContentfulMinistries {
            name
            contentful_id
            image {
              bannerImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
          ... on ContentfulTeamMember {
            name
            title
            id: contentful_id
            image {
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
