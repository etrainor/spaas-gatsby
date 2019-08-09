import React from "react"
import "../footer/footer.scss"
import { Link } from "gatsby"

function Footer () {
  return (
    <div className="footer">
      
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <p>|</p>
        <a href="/disclaimer">Legal Disclaimer</a>
        <p>|</p>
        <a href="/contact-form">Contact</a>
      </div>

      <div>
        © {new Date().getFullYear()} Sound Parent Advocacy and Advisory Service All Rights Reserved
      </div>
      <div className = "site-design">
        <a href="https://erintrainor.me" target="_blank">Site Designed and Developed by Erin Trainor</a>
      </div>
    </div>
  )
}

export default Footer