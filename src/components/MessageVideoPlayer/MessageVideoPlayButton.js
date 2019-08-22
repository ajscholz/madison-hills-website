import React from 'react';
import styled from 'styled-components';
import { FaVideo } from 'react-icons/fa';

export default ({ setTouched }) => (
  <MessageVideoPlayButton
    type="button"
    onClick={() => setTouched(state => !state)}
  >
    Watch
    <FaVideo />
  </MessageVideoPlayButton>
);

export const MessageVideoPlayButton = styled.button`
  font-size: 1rem;
  padding: 0.75rem 2.5rem;
  position: absolute;
  /* bottom: -23px; */
  border: none;
  border-radius: 23px;
  background: var(--primary);
  display: flex;
  align-items: center;
  outline: none;
  color: var(--black);
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.5);
  & svg {
    font-size: 0.8rem;
    margin-left: 0.5rem;
    position: relative;
    opacity: 0.9;
  }
`;
