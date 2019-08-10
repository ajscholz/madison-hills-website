import React from 'react';
import styled, { css } from 'styled-components';
import { FaPlay } from 'react-icons/fa';

export default props => {
  const { tracks, currentTrack } = props;

  return (
    <Playlist>
      <Header>
        <Title>Playlist</Title>
      </Header>
      <Tracks>
        {tracks.map((track, index) => {
          return (
            <Track
              key={track.title}
              icon={FaPlay}
              active={index === currentTrack}
              onClick={() => props.onTrackClick(index)}
            >
              {track.title}
            </Track>
          );
        })}
      </Tracks>
    </Playlist>
  );
};

const Playlist = styled.aside`
  background-color: #282f31;
  color: #fff;
  width: 100%;
`;

const Header = styled.header`
  padding: 2px;
  background-color: #373d3f;
`;

const Title = styled.h3`
  font-size: 14px;
  text-align: center;
`;

const Tracks = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #373d3f;
`;

const Track = styled.li`
  padding: 0.8rem 0.8rem 0.8rem 2.4rem;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  & + & {
    border-top: 1px solid rgba(256, 256, 256, 0.2);
  }

  ${props =>
    props.active &&
    css`
      color: var(--primary);
      &:after {
        content: '>';
        position: absolute;
        color: var(--primary);
        font-size: 14px;
        left: 1rem;
      }
    `}
`;
