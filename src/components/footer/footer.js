import React from "react"
import "../footer/footer.scss"
import { Link } from "gatsby"

function Footer () {
  return (
    <div className="footer">
      <div>
        © {new Date().getFullYear()} Sound Parent Advocacy and Advisory Service
      </div>
      <div className="footer-links">
        <a href="">Privacy Policy</a>
        <a href="">Legal Disclaimer</a>
        <a href="">Contact</a>
      </div>
      <div className="site-design">
        <a href="">Site Designed and Developed by Erin Trainor</a>
      </div>
    </div>
  )
}

export default Footer