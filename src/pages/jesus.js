import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import HeroImage from '../components/HeroImage';
import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import ContentfulRichText from '../components/ContentfulRichText';

const JesusPage = ({ data }) => {
  const { image, sections } = data.page;

  const s1 = sections[0];
  const s2 = sections[1];
  const verse = { content: [s2.content.json.content[0]] };
  const reference = { content: [s2.content.json.content[1]] };
  const s3 = sections[2];

  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  return (
    <>
      <Seo title="Jesus" image={img} />

      <HeroImage image={image.fluid} backgroundPosition="51% 78%">
        Jesus
      </HeroImage>

      <SectionOne>
        <Title>{s1.title}</Title>
        <ContentfulRichText content={s1.content.json} />
      </SectionOne>

      <SectionTwo>
        <ContentfulRichText content={verse} className="verse" />
        <ContentfulRichText content={reference} className="reference" />
      </SectionTwo>

      <SectionThree>
        <Title>{s3.title}</Title>
        <div className="text-content">
          <ContentfulRichText content={s3.content.json} />
        </div>
        <Img fluid={s3.image.fluid} />
        <Button>
          <Link to="/visit">Plan A Visit</Link>
        </Button>
      </SectionThree>
    </>
  );
};

const SectionOne = styled(Section)`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  & > p {
    margin-top: 0;
  }
`;

const SectionTwo = styled(Section)`
  font-size: 1.5rem;
  text-align: center;

  & .verse {
    margin: 0;
    @media (min-width: 576px) {
      font-size: 1.2em;
    }
    @media (min-width: 776px) {
      font-size: 1.5em;
    }
  }

  & .reference {
    margin-bottom: 0;
    color: var(--primary);
    font-size: 0.7em;
    @media (min-width: 576px) {
      font-size: 0.85em;
    }
    @media (min-width: 776px) {
      font-size: 1em;
    }
  }
`;

const SectionThree = styled(Section)`
  display: grid;
  position: relative;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    'title'
    'text'
    'button';

  & ${Title} {
    grid-area: title;
    margin: 0 auto 2.5rem;
    z-index: 1;
  }

  & .text-content {
    grid-area: text;
    z-index: 1;
    & p {
      margin-top: 0;
    }
  }

  & button {
    grid-area: button;
    margin: 1rem auto 0;
    z-index: 1;
  }

  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
    background: var(--white);
    & img {
      opacity: 0.3 !important;
      object-position: 58% 40% !important;
    }
  }

  @media (min-width: 662px) {
    grid-template-areas:
      'title title'
      'image text'
      'image button';
    grid-template-columns: 40% 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 2rem;

    & ${Title} {
      margin: 0 auto 1rem;
    }

    & .text-content {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      & p:last-of-type {
        margin-bottom: 0;
      }
    }

    & button {
      margin: -0.5rem auto 0 0;
    }

    & .gatsby-image-wrapper {
      position: static;
      grid-area: image;
      & img {
        opacity: 1 !important;
      }
    }
  }
`;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Jesus" }) {
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
      sections: section {
        title
        content {
          json
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default JesusPage;
