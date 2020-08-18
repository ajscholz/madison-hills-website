import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import HeroImage from '../components/Layout/HeroImage';
import Section from '../components/Sections/Section';
import Title from '../components/Title';
import ContentfulRichText from '../components/ContentfulRichText';
import PyvForm from '../components/Forms/PyvForm';

import { sectionHelper } from '../utils/helpers';

const visit = ({ data }) => {
  const { image } = data.page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  const sections = sectionHelper(
    [
      '6emqQ1iRviVutJbK7CMMeF',
      '7touMIFYmyxTCCalIKleo4',
      '278ipIvCf2mi2rlg3GW2bq',
      '7je44pVbhblsHSaVOmC7Bm',
      '3UlLu0i9q3hmTBdBsGRoSA',
    ],
    data.page.sections
  );

  sections[0].content = (
    <ContentfulRichText content={sections[0].textContent.json} />
  );

  sections[1].content = <h3>hi from section 2</h3>;

  sections[2].content = (
    <ContentfulRichText content={sections[2].textContent.json} />
  );

  sections[3].content = (
    <ContentfulRichText content={sections[3].textContent.json} />
  );

  sections[4].content = (
    <>
      <ContentfulRichText content={sections[4].textContent.json} />
      <PyvForm />
    </>
  );

  const newSections = [sections[0], sections[2], sections[3]];

  return (
    <>
      <Seo title="Visit" image={img} />

      <HeroImage
        image={image.fluid}
        backgroundPosition="51% 78%"
        title="Visit"
      />

      {newSections.map(section => (
        <Section key={section.id}>
          <Title>{section.title}</Title>
          {section.content}
        </Section>
      ))}
      {/* <Section>
        <Title>Let us know</Title>
        <PyvForm />
      </Section> */}
    </>
  );
};

export default visit;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Visit" }) {
      ...HeroImageFragment
      sections: section {
        id: contentful_id
        title
        textContent {
          json
        }
        contentReferences {
          ... on ContentfulBasicInformation {
            title
            infoLine1
            infoLine2
          }
        }
      }
    }
  }
`;
