import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import { ToggleButton } from '../components/Button';
import MessagesView from '../components/views/MessagesView';
import SeriesView from '../components/views/SeriesView';

import { MessageViewContext } from '../context/MessageViewContext';

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

const watch = ({ data }) => {
  const [view, setView] = useContext(MessageViewContext);

  const image = {
    src: data.hero.image.file.url,
    height: data.hero.image.file.details.image.height,
    width: data.hero.image.file.details.image.width,
  };

  return (
    <>
      <Seo title="Watch" image={image} />
      <StyledHeroImage image={data.hero.image.fluid}>
        Watch{' '}
        <div
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '.5rem 1rem 0 1rem',
          }}
        >
          <ToggleButton
            onClick={() =>
              setView(() => ({
                type: 'messages',
                filters: { communicators: [] },
              }))
            }
            disabled={view.type === 'messages'}
          >
            Messages
          </ToggleButton>
          <ToggleButton
            onClick={() =>
              setView(() => ({
                type: 'series',
                filters: {},
              }))
            }
            disabled={view.type === 'series'}
          >
            Series
          </ToggleButton>
        </div>
      </StyledHeroImage>

      <Section>
        {view.type === 'messages' ? <MessagesView /> : <SeriesView />}
      </Section>
    </>
  );
};

export default watch;
