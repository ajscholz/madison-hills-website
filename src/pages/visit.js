import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Visit" }) {
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

const visit = ({ data }) => {
  const image = {src: data.hero.image.file.url, height: data.hero.image.file.details.image.height, width: data.hero.image.file.details.image.width}
  return (
    <>
      <Seo title="Visit" image={image} />
      <HeroImage image={data.hero.image.fluid} backgroundPosition="51% 78%">
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
