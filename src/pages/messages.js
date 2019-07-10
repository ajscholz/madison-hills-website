import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import StyledHeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Title from "../components/Title"

export const data = graphql`
  {
    heroImage: file(name: { eq: "messages-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const about = ({ data }) => {
  return (
    <Layout>
      <Seo title=""></Seo>
      <StyledHeroImage image={data.heroImage.childImageSharp.fluid}>
        Messages
      </StyledHeroImage>
      <Section>
        <Title>Section</Title>
      </Section>
    </Layout>
  )
}

export default about
