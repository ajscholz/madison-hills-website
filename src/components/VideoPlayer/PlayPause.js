import React from 'react';
import { withMediaProps } from 'react-media-player';

import { FaPlay, FaPause } from 'react-icons/fa';
import IconButton from '../IconButton';

const PlayPause = props => {
  const handlePlayPause = () => {
    props.media.playPause();
  };

  const {
    media: { isPlaying },
    className,
  } = props;

  return (
    <IconButton>
      {isPlaying ? (
        <FaPause
          className={props.className}
          onClick={() => handlePlayPause()}
        />
      ) : (
        <FaPlay className={props.className} onClick={() => handlePlayPause()} />
      )}
    </IconButton>
  );
};

export default withMediaProps(PlayPause);
