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
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`;

const about = ({ data }) => {
  return (
    <>
      <Seo title="Message" image={data.hero.image.src}></Seo>
      <StyledHeroImage image={data.hero.image.fluid}>Messages</StyledHeroImage>
      <Section>
        <Title>Section</Title>
      </Section>
    </>
  );
};

export default about;
