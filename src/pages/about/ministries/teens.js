import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../../../components/Layout/HeroImage';
import Section from '../../../components/Sections/Section';
import Title from '../../../components/Title';
import Seo from '../../../components/Seo';
import Button from '../../../components/Buttons/Button';
import MinistrySection from '../../../components/Sections/MinistrySection';
import TextMessageButton from '../../../components/Buttons/TextMessageButton';
import SocialLinks from '../../../components/Navigation/SocialLinks';
import PlaylistPlayer from '../../../components/VideoPlayer/PlaylistPlayer';
import VerseSection from '../../../components/Sections/VerseSection';

import { sectionHelper } from '../../../utils/helpers';
import ContentfulRichText from '../../../components/ContentfulRichText';

const Teens = ({ data, className }) => {
  const { page } = data;
  const { image } = page;

  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  let sections = sectionHelper(
    [
      '16KoZzuX0fDHTMUj8lSUHl',
      '5WVKjWGFWHyxVswQcwfxyE',
      '3uWg6JqAbiHtpASleuvMhB',
      'mfF9pfoDXbn49oWIuwFPi',
      'ezwExY6ZhCUuSoNeaqXCG',
    ],
    data.page.sections
  );

  sections[0].content = (
    <StyledContentfulRichText
      className={className}
      content={sections[0].textContent.json}
    />
  );
  sections[0].styles = { paddingTop: '6rem', paddingBottom: '6rem' };

  let content = sections[1].contentReferences[0];
  sections[1].content = (
    <VerseSection text={content.text.text} reference={content.reference} />
  );

  sections[2].content = (
    <MinistrySection ministry={sections[2].contentReferences[0]} />
  );

  sections[3].content = (
    <MinistrySection
      ministry={sections[3].contentReferences[0]}
      reverse={true}
    />
  );

  content = sections[4].contentReferences[0];
  sections[4].content = (
    <>
      <div
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          marginBottom: '2rem',
        }}
      >
        <ContentfulRichText content={sections[4].textContent.json} />
      </div>
      <PlaylistPlayer playlist={content.playlist} />
    </>
  );

  return (
    <>
      <Seo
        title="Teen Ministry"
        image={img}
        description={`The teen ministry of Madison Hills Christian Church.`}
      />

      <HeroImage
        image={page}
        backgroundPosition="45% 27%"
        title="Teen Ministry"
      />

      {sections.map((section, i) => {
        return (
          <Section key={section.id} style={{ ...section.styles }}>
            {i > 1 && <Title>{section.title}</Title>}
            {section.content}
          </Section>
        );
      })}

      <Section>
        <Title>Stay In the Loop</Title>
        <div style={{ textAlign: 'center' }}>
          Text "@TeensMHCC" to 81010 or click the button below to join our text
          list.
        </div>
        <TextMessageButton link="sms://81010?body=%40TeensMHCC">
          Text Us Now
        </TextMessageButton>
      </Section>

      <Section>
        <Title>What About My Children?</Title>
        <Button as={Link} to="/about/ministries/kids">
          Kids Page
        </Button>
      </Section>

      <SocialLinks accounts={data.socialMedia} />
    </>
  );
};

export default Teens;

const StyledContentfulRichText = styled(ContentfulRichText)`
  margin: 0;
  font-size: 1.7rem;
  text-align: center;
  @media (min-width: 576px) {
    font-size: 1.85rem;
  }
  @media (min-width: 776px) {
    font-size: 2rem;
  }
`;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Teens" }) {
      ...HeroImageFragment
      sections: section {
        title
        id: contentful_id
        textContent {
          json
        }
        contentReferences {
          ... on ContentfulVerse {
            reference
            text {
              text
            }
          }
          ... on ContentfulPrograms {
            title
            id: contentful_id
            dayOfWeek
            startTime
            endTime
            location
            ageRange
            description {
              description
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          ... on ContentfulVideoPlaylist {
            title
            playlist: videos {
              title
              contentful_id
              link
            }
          }
        }
      }
    }
    socialMedia: contentfulSocialMedia(ministryArea: { eq: "Teens" }) {
      facebook
      instagram
      twitter
    }
  }
`;
