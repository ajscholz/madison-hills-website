import React from 'react';

export default props => {
  const { tracks, currentTrack } = props;

  return (
    <aside className="media-playlist">
      <header className="media-playlist-header">
        <h3 className="media-playlist-title">Playlist</h3>
      </header>
      <ul className="media-playlist-tracks">
        {tracks.map((track, index) => {
          return (
            <li
              key={track.label}
              className={`media-playlist-track ${
                index === currentTrack ? 'is-active' : ''
              }`}
              onClick={() => props.onTrackClick(index)}
            >
              {track.label}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
