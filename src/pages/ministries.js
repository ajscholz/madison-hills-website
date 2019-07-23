import React from 'react';
import { graphql, Link } from 'gatsby';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';

export const data = graphql`
  {
    heroImage: file(name: { eq: "ministries-banner" }) {
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
      <Seo title=""></Seo>
      <StyledHeroImage image={data.heroImage.childImageSharp.fluid}>
        Ministries
      </StyledHeroImage>
      <Section dark>
        <Title>Community</Title>
        <Button>
          <Link to="ministries/community">Go to community page</Link>
        </Button>
      </Section>
      <Section>
        <Title>Teens</Title>
        <Button>
          <Link to="ministries/teens">Go to teens page</Link>
        </Button>
      </Section>
      <Section dark>
        <Title>Kids</Title>
        <Button>
          <Link to="ministries/kids">Go to kids page</Link>
        </Button>
      </Section>
      <Section>
        <Title>Worship</Title>
        <Button>
          <Link to="ministries/worship">Go to worship page</Link>
        </Button>
      </Section>
    </>
  );
};

export default about;
