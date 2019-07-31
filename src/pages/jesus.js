import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';

export const data = graphql`
  {
    heroImage: file(name: { eq: "jesus-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const jesus = ({ data }) => {
  return (
    <>
      <Seo title="Jesus" image="/src/images/jesus-hero.jpg"></Seo>
      <HeroImage
        image={data.heroImage.childImageSharp.fluid}
        backgroundPosition="51% 78%"
      >
        Jesus
      </HeroImage>
      <Section>hello from jesus page</Section>
    </>
  );
};

export default jesus;
