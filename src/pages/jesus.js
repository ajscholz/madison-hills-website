import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Jesus" }) {
      image: pageBannerImage {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`;

const jesus = ({ data }) => {
  return (
    <>
      <Seo title="Jesus" image={data.hero.image.src}></Seo>
      <HeroImage image={data.hero.image.fluid} backgroundPosition="51% 78%">
        Jesus
      </HeroImage>
      <Section>hello from jesus page</Section>
    </>
  );
};

export default jesus;
