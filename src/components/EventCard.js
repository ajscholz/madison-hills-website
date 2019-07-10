import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const EventCard = ({ image, title }) => {
  const backgroundFluidImageStack = [
    image,
    `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
  ].reverse()
  return (
    <StyledBackgroundImage fluid={backgroundFluidImageStack}>
      <Text>{title}</Text>
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.h3`
  text-align: center;
  text-transform: capitalize;
  margin: 0;
  align-self: center;
`

export default EventCard
