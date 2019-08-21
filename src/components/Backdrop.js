import React from 'react';
import styled from 'styled-components';

const Backdrop = ({ className, open }) => {
  // if (open) document.body.style.overflowY = 'hidden';
  return <div className={className}></div>;
};

export default styled(Backdrop)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
