import React from "react"
import "../navigation/navigation.scss"

// function toggleMenu() {
// 	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
// }

function Navigation () {
  return (
    <nav>
      <ul className="navigation">
        {/* <li><a title="Menu" onclick="toggleMenu()">☰ Menu</a></li> */}
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About</a></li>
        {/* <li><a href="form.html">Form</a></li> */}
        {/* <li><a href="https://httpstatusdogs.com/img/307.jpg">How it Works</a></li> */}
        {/* <li><a href="https://httpstatusdogs.com/img/307.jpg">Testimonials</a></li> */}
        <li><a href="https://httpstatusdogs.com/img/404.jpg">Resources</a></li>
        <li><a href="https://httpstatusdogs.com/img/404.jpg">Blog</a></li>
        {/* <li><a href="https://httpstatusdogs.com/img/307.jpg">Client Portal</a></li> */}
        <li><a href="/contact-form">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation //toggleMenu;