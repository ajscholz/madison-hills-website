import React from "react"
import { Link } from "gatsby"
import DrawerToggleButton from "../components/DrawerToggleButton"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <DrawerToggleButton />
  </Layout>
)

export default SecondPage
