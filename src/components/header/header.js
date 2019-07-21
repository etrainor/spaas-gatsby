import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../logo/logo"
import "../header/header.scss"

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <Logo/>
      </Link>
      <h1>Sound Parent Advocacy and Advisory Service</h1>
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
