import React from 'react';
import { graphql, Link } from 'gatsby';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Seo from '../../../components/Seo';
import Title from '../../../components/Title';
import Button from '../../../components/Button';

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Kids" }) {
      image: pageBannerImage {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`;

const teens = ({ data }) => {
  return (
    <>
      <Seo title="Madison Hills Kids Ministry" image={data.hero.image.src} />
      <HeroImage image={data.hero.image.fluid}>Kids Ministry</HeroImage>
      <Section>Hello from kids page</Section>
      <Section dark>
        <Title>What about my teens?</Title>
        <Button as={Link} to="/about/ministries/teens">
          Teens Page
        </Button>
      </Section>
    </>
  );
};

export default teens;
