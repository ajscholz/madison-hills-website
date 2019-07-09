import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HeroImage = ({ className, image, children, full }) => {
  // adds overlay
  const backgroundFluidImageStack =
    full === true
      ? [
          image,
          `linear-gradient(to bottom, rgba(38, 36, 40, .8), rgba(38, 36, 40, .8))`,
        ].reverse()
      : [
          image,
          `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        ].reverse()

  return (
    <StyledBackgroundImage
      full={full}
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      {children}
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  height: ${props => (props.full ? "70vh" : "40vh")};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;
  @media (min-width: 577px) {
    height: ${props => (props.full ? "70vh" : "40vh")};
  }
`

export default HeroImage
