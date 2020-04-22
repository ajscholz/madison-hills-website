import React, { useEffect } from 'react';
import styled from 'styled-components';

const Backdrop = ({ className, click }) => {
  // document cannot be scrolled when mounted
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  });

  return (
    <button
      className={className}
      onKeyDown={() => {}}
      onClick={() => click(false)}
    />
  );
};

export default styled(Backdrop)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  outline: none;
  cursor: default;
  border: none;
  background: transparent;
  z-index: 100;
  @media (min-width: 576px) {
    background: rgba(0, 0, 0, 0.3);
  }
`;
