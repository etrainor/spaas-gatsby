import React from "react"
import { Link } from "gatsby"

import Header from "../components/header/header"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo/seo"
import Form from "../components/form/form"
import Footer from "../components/footer/footer"

const ContactPage = () => (
    <>
      <SEO title="Contact Us" />
      <Header />
      <Navigation />
      <main>
        <Form />
      </main>
      <Footer />
    </>
)

export default ContactPage
