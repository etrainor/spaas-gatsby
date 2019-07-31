import React from "react"
import { Link } from "gatsby"

import Header from "../components/header/header"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo/seo"
// import "../components/layout/layout.css"
import Advocacy from "../components/content/advocacy-page/advocacy-page"
import Footer from "../components/footer/footer"

const AdvisoryPage = () => (
    <>
      <SEO title="Advisory Services" />
      <Header />
      <Navigation />
      <main>
        <Advocacy />
      </main>
      <Footer />
    </>
)

export default AdvisoryPage
