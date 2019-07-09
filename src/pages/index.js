import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/HeroImage"
import SEO from "../components/seo"
import Title from "../components/TItle"

export const data = graphql`
  query MyQuery {
    file(name: { eq: "index-banner" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage image={data.file.childImageSharp.fluid} full></HeroImage>

    <Title>Welcome to the homepage</Title>
  </Layout>
)

export default IndexPage
