import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';
import { getImageFocus } from '../../utils/helpers';

import Banner from '../Banner';

const HeroImage = ({ className, image, children, full, title, huge }) => {
  // adds overlay
  const backgroundFluidImageStack = full
    ? [
        image.image.fluid,
        `linear-gradient(to bottom, rgba(0, 130, 29, .2), rgba(0, 130, 29, .1))`,
        `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.4))`,
      ].reverse()
    : huge
    ? [
        image.image.fluid,
        `linear-gradient(to bottom, rgba(242, 238, 238, 0.7), rgba(242, 238, 238, 0.7))`,
      ].reverse()
    : [
        image.image.fluid,
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      ].reverse();

  const focus = getImageFocus(
    image.image.file.details.image,
    image.focalPoint.focalPoint
  );

  return (
    <StyledBackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
      backgroundPosition={focus}
    >
      <Banner>{title}</Banner>
      {children}
    </StyledBackgroundImage>
  );
};

const StyledHeroImage = styled(HeroImage)`
  padding-top: ${props => (props.huge ? '0' : '85.19px')};
  height: ${props => (props.full ? '75vh' : props.huge ? '100%' : '50vh')};
  @media (min-width: 577px) {
    height: ${props => (props.full ? '65vh' : props.huge ? '100%' : '50vh')};
  }

  @media (min-width: 663px) {
    padding-top: ${props => (props.huge ? '0' : '121.14px')};
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
    focalPoint {
      focalPoint {
        x
        y
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
