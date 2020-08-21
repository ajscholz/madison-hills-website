import React from 'react';
import { graphql } from 'gatsby';

import HeroImage from '../../../components/Layout/HeroImage';
import Section from '../../../components/Sections/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import MinistryCard from '../../../components/Cards/MinistryCard';
import FlexContainer from '../../../components/Layout/FlexContainer';
import ContentfulRichText from '../../../components/ContentfulRichText';
import CommunityMinistriesForm from '../../../components/Forms/CommunityMinistriesForm';

import { sectionHelper } from '../../../utils/helpers';

const community = ({ data }) => {
  const { page } = data;
  const { image } = page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  let sections = sectionHelper(
    ['7nIXrgqsVg3xBt3oPaz5gf', '3udEQr4gNnB6xbmAZeD4HO'],
    data.page.sections
  );

  sections[0].content = (
    <>
      <ContentfulRichText
        content={sections[0].textContent.json}
        style={{ marginTop: '0' }}
      />
      <FlexContainer style={{ marginTop: '1rem' }}>
        {sections[0].contentReferences.map(ministry => (
          <MinistryCard
            key={ministry.contentful_id}
            title={ministry.name}
            description={ministry.description.description}
            image={ministry.image.fixed}
            link={ministry.link}
          />
        ))}
      </FlexContainer>
    </>
  );

  sections[1].content = (
    <>
      <ContentfulRichText
        content={sections[1].textContent.json}
        style={{ marginBottom: '3rem' }}
      />
      <CommunityMinistriesForm message={false} light />
    </>
  );

  return (
    <>
      <Seo title="Community Ministries" image={img} />

      <HeroImage image={page} title="Community Ministries" />

      {sections.map(section => {
        return (
          <Section key={section.id}>
            <Title>{section.title}</Title>
            {section.content}
          </Section>
        );
      })}
    </>
  );
};

export default community;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Community" }) {
      ...HeroImageFragment
      sections: section {
        id: contentful_id
        title
        textContent {
          json
        }
        contentReferences {
          ... on ContentfulCommunityMinistries {
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
  }
`;
