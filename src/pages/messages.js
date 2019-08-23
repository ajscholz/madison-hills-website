import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import { ToggleButton } from '../components/Button';
import MessagesView from '../components/views/MessagesView';
import SeriesView from '../components/views/SeriesView';

import { MessageViewContext } from '../context/MessageViewContext';

const messages = ({
  data: {
    page: { image },
  },
}) => {
  const [view, setView] = useContext(MessageViewContext);

  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  return (
    <>
      <Seo title="Messages" image={img} />

      <StyledHeroImage image={image.fluid} title="Messages">
        <div
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
            top: '20px',
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

export default messages;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Messages" }) {
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
