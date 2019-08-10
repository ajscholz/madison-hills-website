import React from 'react';
import { withMediaProps } from 'react-media-player';

import { FaExpand, FaCompress } from 'react-icons/fa';
import IconButton from '../IconButton';

const Fullscreen2 = props => {
  const handleFullscreen = () => {
    props.media.fullscreen();
  };

  const {
    media: { isFullscreen },
  } = props;

  return (
    <IconButton>
      {!isFullscreen ? (
        <FaExpand
          className={props.className}
          onClick={() => handleFullscreen()}
        />
      ) : (
        <FaCompress
          className={props.className}
          onClick={() => handleFullscreen()}
        />
      )}
    </IconButton>
  );
};

export default withMediaProps(Fullscreen2);
