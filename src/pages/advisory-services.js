import React from "react"
import { Link } from "gatsby"

import Header from "../components/header/header"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo/seo"
import Advisory from "../components/content/advisory-page/advisory-page"
import Footer from "../components/footer/footer"


const AdvisoryPage = () => (
    <>
      <SEO title="Advisory Services" />
      <Header />
      <Navigation />
      <main>
        <Advisory />
      </main>
      <Footer />
    </>
)

export default AdvisoryPage
