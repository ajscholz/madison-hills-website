import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';

export const data = graphql`
  {
    heroImage: file(name: { eq: "visit-hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const visit = ({ data }) => {
  return (
    <>
      <Seo title="Visit" image="/src/images/visit-hero.jpg"></Seo>
      <HeroImage
        image={data.heroImage.childImageSharp.fluid}
        backgroundPosition="51% 78%"
      >
        Visit
      </HeroImage>
      <Section>hello from visit page</Section>
    </>
  );
};

export default visit;
