import React from "react"
import "../main-page/main-page.scss"
import { Link } from "gatsby"
import Mailchimp from "../../post-template-details"

function MainPage () {
  return (
    <>
      <div className="main-deck">
        <div id="left-card" className="card">
          <h2>Advocacy Services</h2>
          <p>Negotiating IEP’s can be stressful, time consuming and emotional, and, can grind to a stalemate when emotions and conflict are at a high point. At SPAAS it's our goal to translate and help navigate through these processes to get the best way forward for your child.  </p>
          <button><Link to="/advocacy-services">Learn More</Link></button>
        </div>
        <div id="center-card" className="card">
          <h2>Mission Statement</h2>
          <p>A support system and resource to enable parents to secure an appropriate and effective special education program that represents the best interests of their child.</p>
          <button><Link to="/about-us">Learn More</Link></button>
        </div>
        <div id="right-card" className="card">
          <h2>Advisory Services</h2>
          <p>Whether public or private, some children need extra support. We are here to help you strategize and advise possible ways of helping your child achieve success during their school life.  Some children have a formal diagnosis while others do not, but both struggle in a system aimed at children who learn in a typical fashion.</p>
          <button><Link to="/advisory-services">Learn More</Link></button>
        </div>
      </div>
      {/* <Mailchimp /> */}
    </>
  )
}

export default MainPage