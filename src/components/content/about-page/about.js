import React from "react"
import "../about-page/about.scss"
import { Link } from "gatsby"

function About () {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>As parents of special needs children we have spent over 17 years navigating and negotiating IEP meetings and accommodations within both public and private schools. Over the years we also tried out every therapy and new technique available. During that time we have gained a wealth of valuable experience we are passionate about sharing with other parents facing similar challenges.</p>

      <p>Luckier than some, the teams we worked with through elementary, middle and high schools, and then on to college, were successful and enlightening with both sides bringing different perspectives to the table. Each transition to a different school took a lot of time, patience and determination to build and forge new relationships. This doesn’t mean we did not have to go in with the boxing gloves or remind them from time to time what our rights were, we often disagreed on what we thought was the right course of action and in the best interests of our child. But with the right combination of resources and teamwork, knowledge and persistence we achieved success going far beyond what we had imagined for our child. </p>

      <div className="quote">
        <blockquote>“I do not have a disability, I have a gift! Others may see it as a disability, but I see it as a challenge. This challenge is a gift because I have to become stronger to get around it, and smarter to figure out how to use it; others should be so lucky.” <p className="quote-author">― Shane E. Bryan</p></blockquote>
        
      </div>

      <p>We also bring teaching experience as para educator and teaching aid, both with public and private schools. Private schools while smaller class sizes generally have no or limited services and find it harder to either implement or follow through with accommodations. Whether public or private your child deserves the chance to not just survive but thrive in their classroom.</p>

      <p>It’s these combinations of experience and knowledge we can now offer you and your family.</p>

      <div className="final-quote">
        <blockquote>We are here to tell you...you are not in this on your own.</blockquote>
      </div>

      {/* <div className="call-to-action">
        <p>Our Advisory Services are by appointment only and can be scheduled by calling our office at <a href="tel:4252708424">425-270-8424</a>, or using the Contact Us button below.</p>
        <div className="button">
          <a href="/contact-form">Contact Us</a>
        </div>
      </div> */}
    </div>
  )
}

export default About
