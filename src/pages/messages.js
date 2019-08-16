import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import { ToggleButton } from '../components/Button';
import MessagesView from '../components/views/MessagesView';
import SeriesView from '../components/views/SeriesView';

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Messages" }) {
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

const about = ({ data }) => {
  const [view, setView] = useState('messages');
  const image = {
    src: data.hero.image.file.url,
    height: data.hero.image.file.details.image.height,
    width: data.hero.image.file.details.image.width,
  };
  return (
    <>
      <Seo title="Message" image={image} />
      <StyledHeroImage image={data.hero.image.fluid}>
        Messages{' '}
        <div
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '.5rem 1rem 0 1rem',
          }}
        >
          <ToggleButton
            onClick={() => setView('messages')}
            disabled={view === 'messages'}
          >
            Messages
          </ToggleButton>
          <ToggleButton
            onClick={() => setView('series')}
            disabled={view === 'series'}
          >
            Series
          </ToggleButton>
        </div>
      </StyledHeroImage>

      <Section>
        {view === 'messages' ? <MessagesView /> : <SeriesView />}
      </Section>
    </>
  );
};

export default about;
