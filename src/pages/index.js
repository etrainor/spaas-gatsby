import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image/image"
import SEO from "../components/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="SPAAS.org" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
