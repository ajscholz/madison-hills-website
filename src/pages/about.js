import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeroImage from "../components/HeroImage"
import Section from "../components/Section"
import Title from "../components/Title"

export const data = graphql`
  {
    heroImage: file(name: { eq: "about-banner" }) {
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
      <HeroImage image={data.heroImage.childImageSharp.fluid}>
        banner text
      </HeroImage>
      <Section>
        <Title>Section</Title>
      </Section>
    </Layout>
  )
}

export default about
