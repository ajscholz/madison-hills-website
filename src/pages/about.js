import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import StyledHeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Title from "../components/Title"
import TeamCard from "../components/TeamCard"

import staff from "../utils/staff"

const about = ({ data }) => (
  <Layout>
    <Seo title="About"></Seo>
    <StyledHeroImage image={data.heroImage.childImageSharp.fluid}>
      About
    </StyledHeroImage>
    <TeamSection>
      <Title>Our Team</Title>
      <FlexContainer>
        {/* render a team card for each staff member in the staff array, and dynamically load the graphql image based on their name (key) */}
        {Object.keys(staff).map(key => (
          <TeamCard
            key={key}
            name={staff[key].name}
            jobTitle={staff[key].title}
            image={data[key].childImageSharp.fluid}
            description={staff[key].description}
          />
        ))}
      </FlexContainer>
    </TeamSection>
  </Layout>
)

const TeamSection = styled(Section)`
  padding-bottom: 1.5rem;
`

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

export default about

export const data = graphql`
  {
    heroImage: file(name: { eq: "about-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ben: file(name: { eq: "team-ben" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lawrence: file(name: { eq: "team-lawrence" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jeremy: file(name: { eq: "team-jeremy" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    steveTerry: file(name: { eq: "team-steveterry" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kim: file(name: { eq: "team-kim" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
