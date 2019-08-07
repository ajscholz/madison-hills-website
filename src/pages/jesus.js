import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';
import { Link } from 'gatsby';

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

export default ({ data }) => {
  return (
    <>
      <Seo title="Jesus" image={data.hero.image.src}></Seo>
      <HeroImage image={data.hero.image.fluid} backgroundPosition="51% 78%">
        Jesus
      </HeroImage>
      <Section>
        <Title>Who is Jesus?</Title>
        <p>
          The questions we like to ask about God are endless: “Is God real?” “Is
          what we know about Him really true?” and “what does He have to do with
          my life?” just to list a few.
        </p>
        <p>
          The Bible may not answer every question about God and will often lead
          us to ask more, but one of the areas in which the Bible is quite
          definite, is the answer to the question: who is Jesus? C.S Lewis, a
          well-known Christian author wrote of Jesus, “Either this man was, and
          is, the Son of God, or else a madman or something worse. You can shut
          him up for a fool, you can spit at him and kill him as a demon or you
          can fall at his feet and call him Lord and God, but let us not come
          with any patronizing nonsense about his being a great human teacher.
          He has not left that open to us. He did not intend to.”
        </p>
        <p>
          Jesus commends the Apostle Peter’s confession of Him as “the Messiah,
          the Son of the Living God” (Matthew 16:16), because Jesus knew that
          who He is – and could be to us – has the power to change our lives.
          Jesus is so unique because two worlds collide in him: Heaven and
          Earth, the Divine and the human.
        </p>
        <p>
          Yes, His Name is the name above all names, and his star-breathing,
          storm-calming, miracle-working power is second to none. Yet, He is
          also the human Jesus, the personal friend who knows what we are going
          through and cares about us. That’s why the Bible also calls Him
          “Immanuel”, God with us.
        </p>
      </Section>
      <StyledSection dark>
        <Reference>John 3:16 MSG</Reference>
        <VerseLarge>
          This is how much God loved the world: He gave his Son so that no one
          need be destroyed; by believing in Him, anyone can have a whole and
          lasting life.
        </VerseLarge>
      </StyledSection>
      <Section>
        <Title>Be Part of the Family</Title>
        <p>
          One of the best ways to find connection to help you with your faith is
          being part of a local church.
        </p>
        <p>
          We're a little biased, but we think Madison Hills might just be the
          right church family for you.
        </p>
        <p>
          So no matter where you've been or what your life looks like you're
          welcome here.
        </p>
        <Button
          as={Link}
          to="/visit"
          style={{ marginTop: '2rem', outline: 'none' }}
        >
          Plan A Visit
        </Button>
      </Section>
    </>
  );
};

const StyledSection = styled(Section)`
  flex-direction: column-reverse;
`;

const Reference = styled.h3``;

const VerseLarge = styled.div`
  font-size: 1.5rem;
  text-align: center;
  @media (min-width: 576px) {
    font-size: 1.75rem;
    @media (min-width: 776px) {
      font-size: 2rem;
    }
  }
`;
