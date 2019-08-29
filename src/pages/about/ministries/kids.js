import React from 'react';
import { graphql, Link } from 'gatsby';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import MinistrySection from '../../../components/MinistrySection';
import TextMessageButton from '../../../components/TextMessageButton';

import { sectionHelper } from '../../../utils/helpers';

const Kids = ({ data }) => {
  const { image } = data.page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  const sections = sectionHelper(
    [
      '4rEW2suQGMc8uVcf8LYxVw',
      'DM68VRmYgzJ7HyueEc8Nt',
      '3D5SMShE2HXTDAlYoM7zbX',
    ],
    data.page.sections
  );

  return (
    <>
      <Seo title="Madison Hills Kids Ministry" image={img} />
      <HeroImage image={image.fluid} title="Kids Ministry" />

      {sections.map((section, i) => (
        <Section key={section.id}>
          <Title>{section.title}</Title>
          <MinistrySection
            ministry={section.programs[0]}
            reverse={i % 2 === 1}
          />
        </Section>
      ))}

      <Section>
        <Title>Stay In the Loop</Title>
        <p style={{ textAlign: 'center' }}>
          Text "@mhcckidn" to 81010 or click the button below to join our text
          list.
        </p>
        <TextMessageButton link="sms://81010?body=%40mhcckidn" />
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

export default Kids;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Kids" }) {
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
        programs: contentReferences {
          ... on ContentfulPrograms {
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
  }
`;
