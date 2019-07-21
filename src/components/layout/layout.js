/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../reset/reset.scss"
// import "./layout.css"
import Header from "../header/header"
import Navigation from "../navigation/navigation";
import Banner from "../banner/banner"
// import Page from '../page/page';
// import content from '../content/content.json';
// import Deck from "../deck/deck"
import MainPage from "../content/main-page/main-page"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navigation />
      <Banner />
      <main>
        <MainPage/>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
