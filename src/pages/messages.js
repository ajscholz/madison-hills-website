import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Messages" }) {
      image: pageBannerImage {
        file {
          url
          details {
            image {
              height
              width
            }
          }
        }
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`;

const about = ({ data }) => {
  const image = {src: data.hero.image.file.url, height: data.hero.image.file.details.image.height, width: data.hero.image.file.details.image.width}
  return (
    <>
      <Seo title="Message" image={image}/>
      <StyledHeroImage image={data.hero.image.fluid}>Messages</StyledHeroImage>
      <Section>
        <Title>Section</Title>
      </Section>
    </>
  );
};

export default about;
