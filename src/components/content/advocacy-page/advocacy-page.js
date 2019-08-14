import React from "react"
import "../advocacy-page/advocacy.scss"
import { Link } from "gatsby"

function Advocacy () {
  return (
    <div className="advocacy-deck">
      <h1>Advocacy Services</h1>
        <p>Negotiating IEP’s can be stressful, time consuming and emotional, and, can grind to a stalemate when emotions and conflict are at a high point. At SPAAS its our goal to translate and help you navigate through these processes to get the best way forward for your child.  We aim to develop a set of IEP goals with you and/or your school, that will help your child be successful but also maximizes your rights as parents.  We will make sure you are getting the appropriate education your child is eligible for under the Individuals with Disabilities Education Act.</p>
        <div>
          <h2>IEP Negotiations May Include:</h2>
          <ul>
            <li>Communicating at various different levels within your school district and at your particular school</li>
            <li>Building relationships with the teachers and specialists who will work with you and your child throughout their time at the school.</li>
            <li>Establishing and negotiating new IEP goals and special services based on your child’s needs.</li> 
            <li>Understanding and reviewing previous IEP goals to understand differences and establish needs have been met or followed.</li>
            <li>Attending IEP Meetings as support or on behalf of parents.
            Summarizing and advising parents on how to proceed with IEP meetings.</li>
            <li>Attending or advising on 504 Planning Meetings.</li>
            <li>Researching and evaluating alternative education options.</li>
            <li>Access to Advisory Services.</li>
            <li>Access to Client Portal for on-going communication exchanges.</li>
          </ul>
        </div>
        <h2 className="sub-heading">Why chose Advocacy Services?</h2> 
        <p>You don’t have to! But the nature of IEP negotiations could be a series of email exchanges, phone calls, skype calls, working notes and research each taking small chunks of time.  A retainer is a regular monthly fee billed on the 1st of each month.  Once we have had an understanding of what is required to assist you, we can put together an estimate of hours required and length of time to complete and divide it into equal payments.</p> 
        <div className="call-to-action">
          <p>Have questions? You can reach us by calling our office at <a href="tel:4252708424">425-270-8424</a>, or using the Contact Us button below.</p>
          <div className="button">
            <a href="/contact-form">Contact Us</a>
          </div>
        </div>
    </div>
  )
}

export default Advocacy
