import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/Seo';
// import Title from '../components/Title';
// import Section from '../components/Section';
import MediaPlayer from '../components/VideoPlayer/MediaPlayer';
import { LinkButton } from '../components/Buttons/Button';
import HeroImage from '../components/Layout/HeroImage';

const PartyPeoplePage = props => {
  const { data, className } = props;
  // const {
  //   page: { image },
  // } = data;
  // const img = {
  //   src: image.file.url,
  //   height: image.file.details.image.height,
  //   width: image.file.details.image.width,
  // };

  const page = {
    image: data.image,
    focalPoint: {
      focalPoint: {
        x: data.image.file.details.image.width / 2,
        y: data.image.file.details.image.height / 2,
      },
    },
  };

  console.log(page);

  let videoLink = `${data.video.link}&wmode=opaque&rel=0`;

  videoLink = 'https://www.youtube.com/embed/AY_x_fMkOvs&wmode=opaque&rel=0';

  return (
    <div className={className}>
      <HeroImage image={page} huge>
        <SEO
          title="Home"
          // image={img}
        />
        <div className="container">
          <h1>Party People Church?</h1>
          <p>
            Yeah, we're the party people church. Maybe that sounds weird to you.
            Take{' '}
            <span style={{ fontWeight: '700', color: 'var(--primaryDark)' }}>
              <em>two minutes</em>
            </span>{' '}
            to watch this video and discover the difference here.
          </p>
          <div className="player-container">
            <MediaPlayer src={videoLink}></MediaPlayer>
          </div>

          <LinkButton to="/" style={{ marginTop: '2rem' }}>
            Find out more
          </LinkButton>
        </div>
      </HeroImage>
    </div>
  );
};

export default styled(PartyPeoplePage)`
  /* padding: 5%; */
  height: 100vh;
  text-align: center;

  & .container {
    padding: 5%;
    height: 100%;
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & h1 {
    margin-top: 0;
  }

  & .player-container {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const data = graphql`
  {
    video: contentfulYouTubeVideo(title: { eq: "Why Party People?" }) {
      link
    }
    image: contentfulAsset(contentful_id: { eq: "MC5dWFao0NSvZst2Pw3vl" }) {
      fluid(resizingBehavior: FILL) {
        ...GatsbyContentfulFluid
      }
      file {
        details {
          image {
            height
            width
          }
        }
      }
    }
  }
`;
