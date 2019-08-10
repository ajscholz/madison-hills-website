import React from 'react';
import { Media, Player, controls, utils } from 'react-media-player';
import styled, { css } from 'styled-components';

import PlayPause from './PlayPause';
import MuteUnmute from './MuteUnmute';
import Fullscreen from './Fullscreen';

import './main.scss';

const { CurrentTime, Progress, SeekBar, Duration } = controls;
const { keyboardControls } = utils;

export default props => {
  const { src, autoPlay } = props;

  return (
    <Media>
      {mediaProps => {
        return (
          <MediaPlayer
            fullscreen={mediaProps.isFullscreen}
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
            <MediaControls fullscreen={mediaProps.isFullscreen}>
              <MediaControl as={PlayPause} />
              <StatusBar>
                <TimeLabel as={CurrentTime} />
                <Wrapper>
                  <ProgressBar as={Progress} />
                  <StyledSeekBar />
                </Wrapper>
                <TimeLabel as={Duration} />
              </StatusBar>
              <MediaControl as={MuteUnmute} />
              <MediaControl as={Fullscreen} />
            </MediaControls>
          </MediaPlayer>
        );
      }}
    </Media>
  );
};

const MediaPlayer = styled.div`
  width: 100%;
  position: relative;
  outline: none;

  /* hide native controls */
  video::-webkit-media-controls {
    display: ${props => !props.fullscreen && 'none !important'};
  }
`;

const MediaPlayerElement = styled.div`
  max-width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
  background-color: #d4d4d4;
`;

const MediaControls = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  padding: 0.5rem;
  background-color: var(--black);
  color: var(--white);

  ${props =>
    props.fullscreen &&
    css`
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      /* push controls above fullscreen video */
      z-index: 1000;
    `}

  @media(min-width: 576px) {
    padding: 0.75rem;
  }
`;

const MediaControlGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StatusBar = styled(MediaControlGroup)`
  flex: 1;
  margin: 0 10px;
`;

const MediaControl = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 3px;
  position: relative;
  display: flex;
  align-items: center;
`;

const ProgressBar = styled(MediaControl)`
  -webkit-appearance: none;
  height: 100%;
  border: 0;
  width: calc(100% - 12px);
  margin: 0 6px;
  position: absolute;
  left: 0;

  /* bar */
  background-color: var(--black);
  &::-webkit-progress-bar {
    background-color: var(--black);
  }
`;

const StyledSeekBar = styled(SeekBar)`
  height: 100%;
  margin: 0;
  background-color: transparent;
  position: relative;
  z-index: 5;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    position: relative;
    z-index: 1;
    height: 3px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      z-index: -1;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    z-index: -1;
    height: 7px;
    width: 7px;
    border-radius: 50%;

    &::before {
      content: '';
      transform: translateX(-100%);
      display: block;
      z-index: -1;
    }
  }
`;

const TimeLabel = styled.div`
  font-size: 0.7rem;
`;
