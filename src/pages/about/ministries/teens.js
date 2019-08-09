import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Title from '../../../components/Title';
import Seo from '../../../components/Seo';
import Button from '../../../components/Button';
import MinistryList from '../../../components/MinistryList';
import TextMessageButton from '../../../components/TextMessageButton';
import SocialLinks from '../../../components/SocialLinks';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import PlaylistPlayer from '../../../components/VideoPlayer/PlaylistPlayer';

const playlist = [
  {
    src: 'https://youtu.be/Z-I8qhwYmQk',
    label: 'Niagra Falls Video 1',
  },
  {
    src: 'https://youtu.be/durLC2647Xs',
    label: 'Niagra Falls Video 2',
  },
];

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Teens" }) {
      image: pageBannerImage {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
    programs: allContentfulPrograms(
      filter: { ministryArea: { eq: "Teens" } }
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        program: node {
          id
          title
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
      }
    }
    socialMedia: contentfulSocialMedia(ministryArea: { eq: "Teens" }) {
      facebook
      instagram
      twitter
    }
  }
`;

const Teens = ({ data }) => {
  return (
    <>
      <Seo
        title="Teen Ministry  |  Madison Hills Christian Church"
        image={data.hero.image.src}
      />

      <PlaylistPlayer playlist={playlist} />

      <HeroImage image={data.hero.image.fluid} backgroundPosition="45% 27%">
        Teen Ministry
      </HeroImage>

      {/* <VideoPlayer src="https://youtube.com/embed/Z-I8qhwYmQk" /> */}

      <Section style={{ paddingTop: '6rem' }}>
        <Title as="div" style={{ textTransform: 'none' }}>
          {`We lead teens to a closer relationship with Jesus Christ`}
        </Title>

        <MissionVerse>
          <Scripture>
            {`
Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity. Until I come, devote yourself to the public reading of Scripture, to preaching and to teaching.`}
          </Scripture>
          <MissionVerseReference>I Timothy 4:12-13</MissionVerseReference>
        </MissionVerse>
      </Section>

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

      <MinistryList programs={data.programs.edges} />

      <Section>
        <Title>Making A Difference</Title>
        <div>
          {`Every Summer we go to a wonderful city and do amazing projects, meet new people and serve those that need served!  These trips are 5-6 days, having amazing experiences, bonding with our group and making memories that will last a lifetime!`}
          <br />
          {`This Summer, we took  27 Teens and 6 Adults to Niagara Falls…and had an amazing week!`}
        </div>

        {/* <Media>
          <div>
            <MediaPlayer>
              <Player src="https://youtu.be/Z-I8qhwYmQk?controls=0" vendor="youtube"/>
            </MediaPlayer>
            <MediaControls>
              <PlayPause />
              <MuteUnmute />
            </MediaControls>
          </div>
        </Media> */}

        {/* <div>
          <a
            href="https://youtu.be/durLC2647Xs"
            target="_blank"
            rel="noopener noreferrer"
          >{`Niagara Falls (#2)`}</a>
        </div> */}
      </Section>
      <Section dark>
        <Title>What About My Children?</Title>
        <Button as={Link} to="/about/ministries/kids">
          Kids Page
        </Button>
      </Section>
      <SocialLinks accounts={data.socialMedia} />
    </>
  );
};

export default styled(Teens)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Mission = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const MissionVerse = styled.div`
  max-width: 600px;
`;

const Scripture = styled.div`
  margin-bottom: 0;
  text-align: center;
`;

const MissionVerseReference = styled.div`
  width: 100%;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: rgb(150, 150, 150);
  display: flex;
  font-weight: bold;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const MediaPlayer = styled.div`
  width: 100%;
  max-width: 640px;
  position: relative;
`;

const MediaControls = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #282f31;
  color: #fff;
`;
