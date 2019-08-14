import React from "react"
import "../advisory-page/advisory.scss"
import { Link } from "gatsby"

function Advisory () {
  return (
    <div className="advisory-deck">
      <h1>Advisory Services</h1>
      <p>Being a parent brings all sorts of issues and challenges especially in the school system – we know, we have been there ourselves.  Whether public or private, some children need extra support. We are here to help you strategize and advise possible ways of helping your child achieve success during their school life.  Some children have a formal diagnosis while others do not, but both struggle in a system aimed at children who learn in a typical fashion.</p>
      <p>Children with different learning styles often miss out on the education they deserve not through any fault of their own but because the system simply can’t support their needs for so many different reasons.  Part of what we do is to try and identify different ways to get that support and be able to work with schools, teachers and parents to find a way to achieve these goals. Sometimes it’s a simple miscommunication other times, the school just doesn’t have a specialist to do what is needed but that doesn’t mean there aren’t alternatives.  At SPAAS we use our contacts, knowledge and resources to listen to your areas of concern and then help to find the options and choices that would work best for you, your child, and the rest of your family.</p>
    <div>
      <h2>Some of the Areas Where We Can Assist:</h2>
      <ul>
        <li>Occupational Therapy</li>
        <li>Speech and Language Therapy (SLP)</li>
        <li>Vision Therapy</li>
        <li>Integrated Listening System (ILS)</li>
        <li>Programs for Special Needs in the Public School System</li>
        <li>Private School solutions with accommodations for Special Needs</li>
        <li>Options for Pre-school Programs </li>
        <li>Independent Evaluations</li>
        <li>IEP Meeting Consultations</li>
        <li>Understanding IEP goals and statements</li>
        <li>Rights as Parents with a Special Needs Child</li>
        <li>Applied Behavior Analysis (ABA)</li>
        <li>Applying 504 Accommodations in the classroom</li>
        <li>Resources for Children with Autism or Spectrum Diagnosis</li>
        <li>Resources for Attention and Focus </li>
        <li>Programs for Audio Processing and Filtering </li>
      </ul>
    </div>
    <p className="note">Note: This list is just a start and we are happy to research any option that you have heard about and just want to learn more.</p>
    <div className="call-to-action">
      <p>Our Advisory Services are by appointment only and can be scheduled by calling our office at <a href="tel:4252708424">425-270-8424</a>, or using the Contact Us button below.</p>
      <div className="button">
        <a href="/contact-form">Contact Us</a>
      </div>
    </div>
  </div>
  )
}

export default Advisory
