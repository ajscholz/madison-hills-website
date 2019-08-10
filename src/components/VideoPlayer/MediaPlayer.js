import React from 'react';
import { Media, Player, controls, utils } from 'react-media-player';
import styled, { css } from 'styled-components';

import PlayPause from './PlayPause';
import MuteUnmute from './MuteUnmute';
import Fullscreen from './Fullscreen';

import './main.scss';

const { CurrentTime, Progress, SeekBar, Duration, Volume } = controls;
const { keyboardControls } = utils;

// const PrevTrack = props => (
//   <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
//     <polygon fill="#FAFBFB" points="10,0 2,4.8 2,0 0,0 0,12 2,12 2,7.2 10,12" />
//   </svg>
// );

// const NextTrack = props => (
//   <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
//     <polygon fill="#FAFBFB" points="8,0 8,4.8 0,0 0,12 8,7.2 8,12 10,12 10,0" />
//   </svg>
// );

export default props => {
  const { src, autoPlay } = props;

  return (
    <Media>
      {mediaProps => (
        <MediaPlayer
          fullscreen={mediaProps.isFullscreen ? true : false}
          onKeyDown={keyboardControls.bind(null, mediaProps)}
          tabIndex="0"
        >
          <MediaPlayerElement onClick={() => mediaProps.playPause()}>
            <Player
              src={src}
              autoPlay={autoPlay}
              onEnded={() => props.updateTrack(1)}
            />
          </MediaPlayerElement>
          {
            /* <MediaControlsFull>
            <MediaRow>
              <MediaControl as={CurrentTime} />
              <SeekGroup>
                <ProgressControl as={Progress} />
                <SeekControl as={SeekBar} />
              </SeekGroup>
              <MediaControl as={Duration} />
            </MediaRow>
            <MediaRow>
              <MediaControlGroup>
                <MediaControl as={MuteUnmute} />
              </MediaControlGroup>
              <MediaControlGroup>
                <PrevTrackButton
                  as={PrevTrack}
                  onClick={() => props.updateTrack(-1)}
                />
                <MediaControl as={PlayPause} />
                <NextTrackButton
                  as={NextTrack}
                  onClick={() => props.updateTrack(1)}
                />
              </MediaControlGroup>
              <MediaControlGroup>
                <Fullscreen />
              </MediaControlGroup>
            </MediaRow>
          </MediaControlsFull> */
            <MediaControls fullscreen={mediaProps.isFullscreen}>
              <MediaControl as={PlayPause} />
              <MediaControl as={CurrentTime} />
              <Seek>
                <ProgressBar as={Progress} />
                <StyledSeekBar />
              </Seek>
              <MediaControl as={Duration} />
              <MediaControl as={MuteUnmute} />
              <VolumeControl as={Volume} />
              <MediaControl as={Fullscreen} />
            </MediaControls>
          }
        </MediaPlayer>
      )}
    </Media>
  );
};

// const MediaControls = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 12px;
//   background-color: #282f31;
//   color: #fff;

//   svg,
//   path,
//   polygon {
//     transform-origin: 50% 50%;
//   }
// `;

// const MediaControlsFull = styled(MediaControls)`
//   flex-direction: column;
// `;

const MediaPlayer = styled.div`
  width: 100%;
  /* max-width: 640px; */
  position: relative;

  /* hide native controls */
  video::-webkit-media-controls {
    display: none !important;
  }

  ${props =>
    props.fullscreen &&
    css`
      & ${MediaControls} {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;

        /* push controls above fullscreen video */
        z-index: 2147483647;
      }
    `}
`;

const MediaPlayerElement = styled.div`
  max-width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
  background-color: #d4d4d4;
`;

// const MediaRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

// const MediaControl = styled.div`
//   margin: 0 12px;
// `;

// const MediaControlGroup = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
// `;

// const SeekGroup = styled(MediaControlGroup)`
//   flex: 1;
//   width: 100%;
//   margin: 12px 0;
// `;

// const ProgressControl = styled(MediaControl)`
//   -webkit-appearance: none;
//   width: calc(100% - 24px);
//   height: 3px;
//   margin: 0 12px;
//   border: 0;
//   position: absolute;
//   top: 7px;
//   left: 0;

//   /* bar */
//   background-color: #373d3f;
//   &::-webkit-progress-bar {
//     background-color: #373d3f;
//   }

//   /* progress */
//   color: lighten(#373d3f, 5%);
//   &::-moz-progress-bar {
//     background-color: lighten(#373d3f, 5%);
//   }
//   &::-webkit-progress-value {
//     background-color: lighten(#373d3f, 5%);
//   }
// `;

// const SeekControl = styled(MediaControl)`
//   width: 100%;
//   position: relative;
//   z-index: 5;
//   @include -range-track(webkit, moz, ms) {
//     background-color: transparent !important;
//   }
// `;

// const PrevTrackButton = styled(MediaControl)`
//   margin-right: 6px;
// `;

// const NextTrackButton = styled(MediaControl)`
//   margin-left: 6px;
// `;

const MediaControls = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: var(--black);
  color: var(--white);

  svg,
  path,
  polygon {
    transform-origin: 50% 50%;
  }
  ${props =>
    props.fullscreen &&
    css`
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;

      /* push controls above fullscreen video */
      z-index: 2147483647;
    `}
`;

const MediaControlGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Seek = styled(MediaControlGroup)`
  flex: 1;
`;

const MediaControl = styled.div`
  margin: 0 12px;
`;

const ProgressBar = styled(MediaControl)`
  -webkit-appearance: none;
  width: calc(100% - 24px);
  height: 3px;
  margin: 0 12px;
  border: 0;
  position: absolute;
  top: 7px;
  left: 0;

  /* bar */
  background-color: var(--black);
  &::-webkit-progress-bar {
    background-color: var(--black);
  }
`;

const StyledSeekBar = styled(SeekBar)`
  position: relative;
  z-index: 5;
  width: 100%;
  margin: 0;
`;

const VolumeControl = styled(MediaControl)`
  max-width: 120px;
`;
