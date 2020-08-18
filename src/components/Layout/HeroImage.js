import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';

import Banner from '../Banner';

const HeroImage = ({
  className,
  image,
  children,
  full,
  title,
  huge,
  backgroundPosition,
}) => {
  // adds overlay
  const backgroundFluidImageStack = full
    ? [
        image,
        `linear-gradient(to bottom, rgba(0, 130, 29, .2), rgba(0, 130, 29, .1))`,
        `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.4))`,
      ].reverse()
    : huge
    ? [
        image,
        `linear-gradient(to bottom, rgba(242, 238, 238, 0.7), rgba(242, 238, 238, 0.7))`,
      ].reverse()
    : [
        image,
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      ].reverse();

  return (
    <StyledBackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
      backgroundPosition={backgroundPosition}
    >
      <Banner>{title}</Banner>
      {children}
    </StyledBackgroundImage>
  );
};

const StyledHeroImage = styled(HeroImage)`
  padding-top: 85.19px;
  height: ${props => (props.full ? '75vh' : props.huge ? '80vh' : '50vh')};
  @media (min-width: 577px) {
    height: ${props => (props.full ? '65vh' : props.huge ? '80vh' : '50vh')};
  }

  @media (min-width: 663px) {
    padding-top: 121.14px;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;

  &&&::before {
    color: red;
    background-position: ${props => props.backgroundPosition} !important;
  }
`;

export default StyledHeroImage;

export const query = graphql`
  fragment HeroImageFragment on ContentfulPages {
    image: bannerImage {
      fluid(quality: 90) {
        ...GatsbyContentfulFluid_withWebp
      }
      file {
        url
        details {
          image {
            height
            width
          }
        }
      }
    }
  }

  fragment BlogPostHeroImageFragment on ContentfulBlogPost {
    image {
      fluid(quality: 90) {
        ...GatsbyContentfulFluid_withWebp
      }
      file {
        url
        details {
          image {
            height
            width
          }
        }
      }
    }
  }
`;
