import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import Banner from "./Banner"

const HeroImage = ({ className, image, children, full }) => {
  // adds overlay
  const backgroundFluidImageStack = full
    ? [
        image,
        `linear-gradient(to bottom, rgba(38, 36, 40, .8), rgba(38, 36, 40, .8))`,
      ].reverse()
    : [
        image,
        `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
      ].reverse()

  return (
    <StyledBackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <Banner>{children}</Banner>
    </StyledBackgroundImage>
  )
}

const StyledHeroImage = styled(HeroImage)`
  height: ${props => (props.full ? "70vh" : "40vh")};
  @media (min-width: 577px) {
    height: ${props => (props.full ? "70vh" : "40vh")};
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;
`

export default StyledHeroImage
