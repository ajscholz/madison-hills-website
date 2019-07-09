import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/HeroImage"
import SEO from "../components/seo"

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
    <h1>Welcome to the homepage</h1>
  </Layout>
)

export default IndexPage
