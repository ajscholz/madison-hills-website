import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import HeroImage from "../../components/HeroImage"
import Banner from "../../components/Banner"
import Section from "../../components/Section"

export const data = graphql`
  {
    heroImage: file(name: { eq: "teens-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const teens = ({ data }) => {
  return (
    <Layout>
      <HeroImage image={data.heroImage.childImageSharp.fluid}>
        <Banner>Kids</Banner>
      </HeroImage>
      <Section>Hello from kids page</Section>
    </Layout>
  )
}

export default teens
