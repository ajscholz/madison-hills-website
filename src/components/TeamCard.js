import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
// import PropTypes from 'prop-types'

import Avatar from "./Avatar"

export default ({ image, name, jobTitle }) => {
  return (
    <TeamCard>
      <Avatar as={Img} fluid={image}></Avatar>
      <Info>
        <Name>{name}</Name>
        <JobTitle>{jobTitle}</JobTitle>
      </Info>
    </TeamCard>
  )
}

const TeamCard = styled.div`
  margin: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 704px) {
    min-width: 225px;
    max-width: 325px;
    flex-grow: 1;
  }
  @media (min-width: 705px) {
    width: 225px;
    flex-grow: unset;
  }
`

const Info = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: capitalize;
`

const Name = styled.h3`
  color: var(--primary);
  margin-bottom: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
`

const JobTitle = styled.h4`
  margin: 0;
`

// const Avatar = styled(Img)`
//   height: 200px;
//   width: 200px;
//   min-width: 200px;
//   border-radius: 50%;
//   margin: 0 0 2rem 0;
//   @media (min-width: 577px) {
//     margin: 0 2rem 0 0;
//   }
// `
