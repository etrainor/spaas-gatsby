import React from "react"
import "../resources-page/resources-page.scss"
import { Link } from "gatsby"
import Mailchimp from "../../post-template-details"

function Resources () {
  return (
    <>
      <div>
        <h1>Recommended Reading</h1>
        <h2>Blog Posts</h2>
        <div className="resources-deck">
          <div id="left-card" className="card">
            <h2>5 terms you should be familiar with when negotiating your child’s IEP. </h2>
            <p>Cupcake ipsum dolor sit amet cookie. Lemon drops cake candy tiramisu toffee cotton candy chocolate bar dessert dessert. Cupcake gummi bears apple pie...</p>
            <button><a href="https://image.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788951.jpg">Learn More</a>{/*<Link to="/contact-form">Learn More</Link>*/}</button>
          </div>
          <div id="center-card" className="card">
            <h2>Really Interesting Information</h2>
            <p>Cupcake ipsum dolor sit amet cookie. Lemon drops cake candy tiramisu toffee cotton candy chocolate bar dessert dessert. Cupcake gummi bears apple pie...</p>
            <button><a href="https://image.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788951.jpg">Learn More</a>{/*<Link to="/contact-form">Learn More</Link>*/}</button>
          </div>
          <div id="right-card" className="card">
            <h2>Really Interesting Information</h2>
            <p>Cupcake ipsum dolor sit amet cookie. Lemon drops cake candy tiramisu toffee cotton candy chocolate bar dessert dessert. Cupcake gummi bears apple pie...</p>
            <button><a href="https://image.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788951.jpg">Learn More</a>{/*<Link to="/contact-form">Learn More</Link>*/}</button>
          </div>
        </div>
        <h2>Library</h2>
        <div className="books">
          <div className = "book-container">
            <img/>
            <title>Name of Book</title>
            <author>I wrote the book</author>
            <p>Description of Book</p>
            
            <a>Amazon Link or Button</a>
          </div>
          <div className = "book-container">
            <img/>
            <title>Name of Book</title>
            <author>I wrote the book</author>
            <p>Description of Book</p>
            <p>ISBN:#############</p>
            <a>Amazon Link or Button</a>
          </div>
          <div className = "book-container">
            <img/>
            <title>Name of Book</title>
            <author>I wrote the book</author>
            <p>Description of Book</p>
            <p>ISBN:#############</p>
            <a>Amazon Link or Button</a>
          </div>
          <div className = "book-container">
            <img/>
            <title>Name of Book</title>
            <author>I wrote the book</author>
            <p>Description of Book</p>
            <p>ISBN:#############</p>
            <a>Amazon Link or Button</a>
          </div>
          <div className = "book-container">
            <img/>
            <title>Name of Book</title>
            <author>I wrote the book</author>
            <p>Description of Book</p>
            <p>ISBN:#############</p>
            <a>Amazon Link or Button</a>
          </div>
        </div>
        <Mailchimp />
        <h2>Additional Resources</h2>
        <div className="outside-links">
          <ul>
            {/* TODO Get icons from font awesome for categories of outside resources */}
            <li><a href="/404">Interesting Website</a></li>
            <li><a href="/404">Very Dull Website</a></li>
            <li><a href="/404">Technical Website</a></li>
            <li><a href="/404">Website about Ponies</a></li>
            <li><a href="/404">Conspiracy Theory Website</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Resources
