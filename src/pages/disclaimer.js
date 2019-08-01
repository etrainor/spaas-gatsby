import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"
import Navigation from "../components/navigation/navigation"
import Footer from "../components/footer/footer"
import Disclaimer from "../components/content/legal-disclaimer/legal-disclaimer"
import SEO from "../components/seo/seo"

const DisclaimerPage = () => (
  <>
    <Header />
    <Navigation />
    <Disclaimer>
      <SEO title="SPAAS.org Legal Disclaimer" />
    </Disclaimer>
    <Footer />
  </>
)

export default DisclaimerPage
