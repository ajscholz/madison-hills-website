import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default props => {
  return (
    <ImageButton>
      <Img fluid={props.image.fluid} style={{ height: '100%' }} />
      <Overlay>{props.children}</Overlay>
    </ImageButton>
  );
};

const ImageButton = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  font-size: 2rem;
  transition: var(--mainTransition);
  ${ImageButton}:hover & {
    background: rgba(0, 0, 0, 0.8);
    /* font-size: 2.25rem; */
  }
`;
