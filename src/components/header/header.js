import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../logo/logo"
import "../header/header.scss"

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
  <header>
    <div>
      <Link to="/">
        <Logo/>
      </Link>
      <h1>{siteTitle}</h1>
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
