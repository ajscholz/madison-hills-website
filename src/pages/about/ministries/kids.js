import React from 'react';
import { graphql, Link } from 'gatsby';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import MinistryList from '../../../components/MinistryList';
import TextMessageButton from '../../../components/TextMessageButton';

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
  const { image } = data.page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  return (
    <>
      <Seo title="Madison Hills Kids Ministry" image={img} />
      <HeroImage image={image.fluid}>Kids Ministry</HeroImage>

      <MinistryList programs={data.programs.edges} />

      <Section dark>
        <Title>Stay In the Loop</Title>
        <div>
          Text "@mhcckidn" to 81010 or click the button below to join our text
          list.
        </div>
        <TextMessageButton link="sms://81010?body=%40mhcckidn">
          Text Us Now
        </TextMessageButton>
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
