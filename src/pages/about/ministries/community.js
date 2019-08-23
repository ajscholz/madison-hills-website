import React from 'react';
import { graphql } from 'gatsby';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import MinistryCard from '../../../components/MinistryCard';
import FlexContainer from '../../../components/FlexContainer';
import Subtitle from '../../../components/Subtitle';

const community = ({ data }) => {
  const { image } = data.page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  return (
    <>
      <Seo title="Community Ministries" image={img} />
      <HeroImage image={image.fluid} title="Community Ministries" />
      <Section>
        <Title>For Richmond</Title>
        <Subtitle>{`We aren't interested in building our own kingdom. We're interested in building God's Kingdom. Here are some of our partners in Richmond that are making a huge difference.`}</Subtitle>
        <FlexContainer>
          {data.ministries.edges.map(({ ministry }) => (
            <MinistryCard
              key={ministry.contentful_id}
              title={ministry.name}
              description={ministry.description.description}
              image={ministry.image.fixed}
              link={ministry.link}
            ></MinistryCard>
          ))}
        </FlexContainer>
      </Section>
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
    }
    ministries: allContentfulCommunityMinistries {
      edges {
        ministry: node {
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
`;
