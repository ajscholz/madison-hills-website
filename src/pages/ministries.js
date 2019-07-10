import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import StyledHeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Title from "../components/Title"

export const data = graphql`
  {
    heroImage: file(name: { eq: "ministries-banner" }) {
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
        Ministries
      </StyledHeroImage>
      <Section>
        <Title>Section</Title>
      </Section>
    </Layout>
  )
}

export default about
