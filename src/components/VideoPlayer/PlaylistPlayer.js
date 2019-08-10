import React, { useState } from 'react';
import Playlist from './Playlist';
import MediaPlayer from './MediaPlayer';
import styled from 'styled-components';

// import './main.scss';

export default props => {
  const { playlist } = props;
  const [currentTrack, setTrack] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const handleTrackClick = track => {
    setTrack(track);
    setAutoPlay(true);
  };

  const navigatePlaylist = direction => {
    const newTrack =
      currentTrack + direction < 0
        ? playlist.length - 1
        : currentTrack + direction >= playlist.length
        ? 0
        : currentTrack + direction;
    setAutoPlay(true);
    setTrack(newTrack);
  };

  return (
    <PlaylistPlayer>
      <MediaPlayer
        // ref={c => (this._mediaPlayer = c)}
        src={playlist[currentTrack].link}
        currentTrack={playlist[currentTrack].title}
        updateTrack={navigatePlaylist}
        autoPlay={autoPlay}
      />
      <Playlist
        tracks={playlist}
        currentTrack={currentTrack}
        onTrackClick={handleTrackClick}
      />
    </PlaylistPlayer>
  );
};

const PlaylistPlayer = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
