import React from 'react';
import { graphql } from 'gatsby';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import MinistryCard from '../../../components/MinistryCard';
import FlexContainer from '../../../components/FlexContainer';
import ContentfulRichText from '../../../components/ContentfulRichText';
import CommunityMinistriesForm from '../../../components/CommunityMinistriesForm';

import { sectionHelper } from '../../../utils/helpers';

const community = ({ data }) => {
  const { image } = data.page;
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

  console.log(sections);

  return (
    <>
      <Seo title="Community Ministries" image={img} />

      <HeroImage image={image.fluid} title="Community Ministries" />

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
