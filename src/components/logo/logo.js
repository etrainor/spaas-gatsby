import React from "react"
import logo from "../../images/SPAAS.png" // Tell Webpack this JS file uses this image
import "../reset/reset.scss"
import "../logo/logo.scss"

console.log(logo) // /logo.84287d09.png

function Logo () {
  // Import result is the URL of your image
  return <img className="logo" src={logo} alt="Logo" />
}

export default Logo