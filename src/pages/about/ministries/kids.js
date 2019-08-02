import React from 'react';
import { graphql } from 'gatsby';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';

export const data = graphql`
  {
    heroImage: file(name: { eq: "teens-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const teens = ({ data }) => {
  return (
    <>
      <HeroImage image={data.heroImage.childImageSharp.fluid}>
        Kids Ministry
      </HeroImage>
      <Section>Hello from kids page</Section>
    </>
  );
};

export default teens;
