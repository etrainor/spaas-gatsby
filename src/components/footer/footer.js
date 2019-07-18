import React from "react"
import "../footer/footer.scss"
import { Link } from "gatsby"

function Footer () {
  return (
    <div className="footer">
        © {new Date().getFullYear()} Sound Parent Advocacy and Advisory Service, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

export default Footer