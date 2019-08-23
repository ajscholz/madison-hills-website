import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

const visit = ({
  data: {
    page: { image },
  },
}) => {
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  return (
    <>
      <Seo title="Visit" image={img} />
      <HeroImage
        image={image.fluid}
        backgroundPosition="51% 78%"
        title="Visit"
      />
      <Section>
        <Title>What To Expect</Title>
      </Section>
      <Section>
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

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Visit" }) {
      image: bannerImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          url
          details {
            image {
              height
              width
            }
          }
        }
      }
    }
  }
`;
