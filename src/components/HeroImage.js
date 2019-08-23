import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Banner from './Banner';

const HeroImage = ({ className, image, children, full, title }) => {
  // adds overlay
  const backgroundFluidImageStack = full
    ? [
        image,
        `linear-gradient(to bottom, rgba(0, 130, 29, .3), rgba(0, 130, 29, .3))`,
        `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6))`,
      ].reverse()
    : [
        image,
        `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
      ].reverse();

  return (
    <StyledBackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <Banner>{title ? title : children}</Banner>
      {children}
    </StyledBackgroundImage>
  );
};

const StyledHeroImage = styled(HeroImage)`
  height: ${props => (props.full ? '70vh' : '40vh')};
  background-position: ${props => props.backgroundPosition};
  @media (min-width: 577px) {
    height: ${props => (props.full ? '70vh' : '40vh')};
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export default StyledHeroImage;
