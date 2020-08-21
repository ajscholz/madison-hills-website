import React from 'react'
import Image from 'gatsby-image'

const ImageWithFocalPoint = image => {
  return (
    <Image fluid={}
  )
}

export default ImageWithFocalPoint

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