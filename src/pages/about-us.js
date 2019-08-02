import React from "react"
import { Link } from "gatsby"

import Header from "../components/header/header"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo/seo"
import Footer from "../components/footer/footer"
import About from "../components/content/about-page/about.js"

const AboutPage = () => (
    <>
      <SEO title="About Us" />
      <Header />
      <Navigation />
      <main>
        <About />
      </main>
      <Footer />
    </>
)

export default AboutPage
