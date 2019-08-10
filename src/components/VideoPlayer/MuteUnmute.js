import React from 'react';
import { withMediaProps } from 'react-media-player';

import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import IconButton from '../IconButton';

const MuteUnmute = props => {
  const handleMuteUnmute = () => {
    props.media.muteUnmute();
  };
  const {
    media: { volume },
    className,
  } = props;

  return (
    <IconButton>
      {volume === 0 ? (
        <FaVolumeMute
          className={className}
          onClick={() => handleMuteUnmute()}
        />
      ) : (
        <FaVolumeUp className={className} onClick={() => handleMuteUnmute()} />
      )}
    </IconButton>
  );
};

export default withMediaProps(MuteUnmute);
