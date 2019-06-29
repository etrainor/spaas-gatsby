import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import "./header.scss"

{/* <header class="site-header">

<div id="logo-banner">
  <a href="#">
    <img id="logo" src="./assets/SPAAS.png">
  </a>
  <h1 id="title">Sound Parent Advocacy and Advisory Service</h1>
</div>  */}

{/* <nav>
  <ul className="navigation">
    <li><a title="Menu" onclick="toggleMenu()">☰ Menu</a>
    </li>
    <li><a className="active" href="index.html">Home</a></li>
    <li><a href="./pages/about.html">About</a></li>
    <!-- <li><a href="form.html">Form</a></li>
    <li><a href="works.html">How it Works</a></li> -->
    <li><a href="./pages/testimonials.html">Testimonials</a></li>
    <li><a href="./pages/contact.html">Contact</a></li>
  </ul>
</nav>
</header> */}

const Header = ({ siteTitle }) => (
  <header
    style={{
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Logo />
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
