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
      <Section>
        <Title>Nursery</Title>
        <p>
          We have a wonderful nursery for babies and young children, staffed
          with loving and compassionate adults! Our nursery is brand new, with
          age appropriate toys and a comfortable environment for the youngest
          children.
        </p>
        <p>
          The nursery is located on the main level of the building, just off the
          main lobby.
        </p>
      </Section>
      <Section dark>
        <Title>Preschool {`&`} Kindergarten</Title>
        <p>
          This is where children are first introduced to the Bible, in the most
          simplistic and innocent ways. We have two newly renovated classrooms
          set up for children more suited for a learning experience, led by one
          of the sweetest teachers! Kim Masters has been leading this class for
          over 10 years and truly loves to teach bright-eyed children about the
          love that God has for the world!
        </p>
        <p>
          The Preschool/Kindergarten Class is located in the basement of the
          church.
        </p>
      </Section>
      <Section>
        <Title>{`1st - 5th Grade`}</Title>
        <p>
          Children that are in school will love the experiences they have when
          they arrive for their weekly program! Students will learn more about
          the Bible, while singing great songs and playing exciting games. We
          have three age specific rooms set up for our school age children; The
          Pet Shop, The Warehouse, and the Game Room! Steve and Terry Marino
          have loved and ministered to school age children for over 7 years and
          are truly are a special couple!
        </p>
        <p>
          The 1st – 5th grade classes are located in the basement of the church.
        </p>
      </Section>
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
