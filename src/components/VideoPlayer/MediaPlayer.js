import React, { useState } from 'react';
import { Media, Player, controls, utils } from 'react-media-player';
import PlayPause from './PlayPause';
import MuteUnmute from './MuteUnmute';
import Fullscreen from './Fullscreen';

import './main.scss';

const { CurrentTime, Progress, SeekBar, Duration } = controls;
const { keyboardControls } = utils;

const PrevTrack = props => (
  <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
    <polygon fill="#FAFBFB" points="10,0 2,4.8 2,0 0,0 0,12 2,12 2,7.2 10,12" />
  </svg>
);

const NextTrack = props => (
  <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
    <polygon fill="#FAFBFB" points="8,0 8,4.8 0,0 0,12 8,7.2 8,12 10,12 10,0" />
  </svg>
);

export default props => {
  const handlePrevTrack = () => {
    props.onPrevTrack();
  };

  const handleNextTrack = () => {
    props.onNextTrack();
  };

  const handleEnded = () => {
    props.onNextTrack();
  };

  const { src, currentTrack, repeatTrack, autoPlay } = props;

  return (
    <Media>
      {mediaProps => (
        <div
          className={
            'media-player' +
            (mediaProps.isFullscreen ? ' media-player--fullscreen' : '')
          }
          onKeyDown={keyboardControls.bind(null, mediaProps)}
          tabIndex="0"
        >
          <div
            className="media-player-element"
            onClick={() => mediaProps.playPause()}
          >
            <Player
              src={src}
              autoPlay={autoPlay}
              onEnded={() => props.updateTrack(1)}
            />
          </div>
          <div className="media-controls media-controls--full">
            <div className="media-row">
              <CurrentTime className="media-control media-control--current-time" />
              {currentTrack}
              <Duration className="media-control media-control--duration" />
            </div>
            <div className="media-control-group media-control-group--seek">
              <Progress className="media-control media-control--progress" />
              <SeekBar className="media-control media-control--seekbar" />
            </div>
            <div className="media-row">
              <div className="media-control-group">
                <MuteUnmute className="media-control media-control--mute-unmute" />
              </div>
              <div className="media-control-group">
                <PrevTrack
                  className="media-control media-control--prev-track"
                  onClick={() => props.updateTrack(-1)}
                />
                <PlayPause className="media-control media-control--play-pause" />
                <NextTrack
                  className="media-control media-control--next-track"
                  onClick={() => props.updateTrack(1)}
                />
              </div>
              <div className="media-control-group">
                <Fullscreen />
              </div>
            </div>
          </div>
        </div>
      )}
    </Media>
  );
};
