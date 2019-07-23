import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';

export const data = graphql`
  {
    heroImage: file(name: { eq: "give-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const about = ({ data }) => {
  return (
    <>
      <Seo title="Give"></Seo>
      <StyledHeroImage image={data.heroImage.childImageSharp.fluid}>
        Give
      </StyledHeroImage>
      <Section>
        <Title>Section</Title>
      </Section>
    </>
  );
};

export default about;
