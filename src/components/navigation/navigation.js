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
        {/* <li><a href="/">Home</a></li> */}
        <li><a href="/about-us">About</a></li>
        {/* <li><a href="form.html">Form</a></li> */}
        {/* <li><a href="https://httpstatusdogs.com/img/307.jpg">How it Works</a></li> */}
        {/* <li><a href="https://httpstatusdogs.com/img/307.jpg">Testimonials</a></li> */}
        <li>Services
          <ul className="dropdown-menu">
            <li><a href="/advisory-services">Advisory</a></li>
            <li><a href="/advocacy-services">Advocacy</a></li>
          </ul>
        </li>

        <li>Resources
          <ul className="dropdown-menu">
            <li><a 
            //TODO: eventually set this form link up as a modal
            href="https://www.dropbox.com/s/f7e4oiu3lkzgdiu/New%20Client%20Information.docx?dl=0" target="_blank">New Client Form</a></li>
            <li><a href="https://httpstatusdogs.com/img/404.jpg">Resource Links</a></li>
            <li><a href="https://httpstatusdogs.com/img/404.jpg">Resource Links 2</a></li>
          </ul>
        </li>
        {/* <li><a href="https://httpstatusdogs.com/img/404.jpg">Blog</a></li> */}
        {/* <li><a href="https://httpstatusdogs.com/img/307.jpg">Client Portal</a></li> */}
        <li><a href="/contact-form">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation //toggleMenu;
