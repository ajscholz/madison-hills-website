import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import TeamCard from '../components/TeamCard';
import Accordion from '../components/Accordion';
import ImageButton from '../components/ImageButton';

const about = ({ data }) => {
  const { image, sections } = data.page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  let team = {};
  let ministries = {};
  let beliefs = {};

  for (let i in sections) {
    if (sections[i].id === '3KsEOEGsu7w6IDlkYavQM4') {
      team = { ...sections[i], styles: {} };
    } else if (sections[i].id === '2y51JvuZ4XxM1wiTC9kqRy') {
      ministries = { ...sections[i], styles: { padding: '4rem 0 0' } };
    } else if (sections[i].id === 'iQqn9gttmnCEbrHeoC4gr') {
      beliefs = { ...sections[i], styles: {} };
    }
  }

  team.content = (
    <FlexContainer>
      {team.contentReferences.map(person => (
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

  ministries.content = (
    <GridContainer>
      {ministries.contentReferences.map(ministry => (
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

  console.log(beliefs.contentReferences);

  beliefs.content = <Accordion items={beliefs.contentReferences} />;

  const pageSections = [team, ministries, beliefs];

  return (
    <>
      <Seo title="About" image={img} />
      <StyledHeroImage image={image.fluid} title="About" />

      {pageSections.map((section, i) => {
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
        fluid {
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
