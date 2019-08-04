import React from "react"
import { Link } from "gatsby"

import Header from "../components/header/header"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo/seo"
import Resources from "../components/content/resources-page/resources-page.js"
import Footer from "../components/footer/footer"


const ResourcesPage = () => (
    <>
      <SEO title="Recommended Reading" />
      <Header />
      <Navigation />
      <main>
        <Resources />
      </main>
      <Footer />
    </>
)

export default ResourcesPage
