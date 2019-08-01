import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
// import Subtitle from '../components/Subtitle';

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
      <Section>
        <Title>What To Expect</Title>
      </Section>
      <Section dark>
        <Title>Not Sure?</Title>
        {/* <Subtitle>{`Here's one of our best messages to help you decide.`}</Subtitle> */}
      </Section>
      <Section>
        <Title>Have Questions?</Title>
        {/* <Subtitle>{`Send us a message and we'll get back to you.`}</Subtitle> */}
        <ContactForm />
      </Section>
    </>
  );
};

export default visit;
