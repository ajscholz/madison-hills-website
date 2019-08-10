import React from 'react';
import styled, { css } from 'styled-components';
import { Media, Player, controls } from 'react-media-player';
import PlayPause from './PlayPause';
import MuteUnmute from './MuteUnmute';
import Fullscreen from './Fullscreen';

const { CurrentTime, Progress, SeekBar, Duration, Volume } = controls;

export default ({ src }) => {
  return (
    <Media>
      {({ isFullscreen, playPause }) => (
        <MediaPlayer tabIndex="0">
          <Player src={src} onClick={() => playPause()} />
          <MediaControls fullscreen={isFullscreen}>
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
        </MediaPlayer>
      )}
    </Media>
  );
};

const MediaPlayer = styled.div`
  width: 100%;
  max-width: 640px;
  position: relative;
  outline: none;
  display: flex;
  flex-direction: column;

  /* hide native controls */
  video::-webkit-media-controls {
    display: none !important;
  }
  & .ytp-chrome-top,
  .ytp-show-watch-later-title,
  .ytp-share-button-visible,
  .ytp-show-share-title,
  .ytp-show-cards-title {
    display: none !important;
  }
`;

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
