import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"
import Navigation from "../components/navigation/navigation"
import Footer from "../components/footer/footer"
import Privacy from "../components/content/privacy-policy/privacy-policy.js"
import SEO from "../components/seo/seo"

const PrivacyPage = () => (
  <>
    <Header />
    <Navigation />
    <Privacy>
      <SEO title="SPAAS.org Privacy Policy" />
    </Privacy>
    <Footer />
  </>
)

export default PrivacyPage
