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
            <img src="https://images-na.ssl-images-amazon.com/images/I/51HmFO63RpL._SX332_BO1,204,203,200_.jpg"/>
            <title>Your Special Education Rights: What Your School District isn't Telling You.</title>
            <p>Authors: Jennifer Laviano & Julie Swanson</p>
            <p>It all seems very simple. A special education law, the Individuals with Disabilities Act (IDEA), was enacted by Congress in 1975 to ensure that children with disabilities have the opportunity to receive a free appropriate public education, just like other children. But nothing is ever simple...</p>
            <p>ISBN:978-1-5107-1939-2</p>
            <button><a href="https://www.amazon.com/Your-Special-Education-Rights-District/dp/1510719393">Learn More</a></button>
          </div>
          <div className = "book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41Feqk01C-L._SX331_BO1,204,203,200_.jpg"/>
            <title>The Art of Advocacy: A Parents Guide to a Collaborative IEP Process</title>
            <p>Author: Charmaine Thaner</p>
            <p>Bringing Cookies to IEP Meetings Will Only Get You So Far! You’ve gone to IEP workshop after IEP workshop, searched for answers at conferences, done late night research on the internet, and yet you still have those guilty feelings that you’re not doing a good enough job advocating for your child. It takes more than gathering records, giving factual information or reciting research and the law to be a successful advocate for your child...</p>
            <p>ISBN:978-1-5192-8473-0</p>
            <button><a href="https://www.amazon.com/Art-Advocacy-Parents-Collaborative-Process/dp/151928473X">Learn More</a></button>
          </div>
          <div className = "book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51y2GksDs7L._SX363_BO1,204,203,200_.jpg"/>
            <title>How ot Compromise with Your School District Without Compromising Your Child</title>
            <p>Author: Gary Mayerson</p>
            <p>The guide that every parent must have! Gary Mayerson has devoted his career in law to helping children with autism get the fair and appropriate education that they need and deserve. In this field guide, he brings parents up to speed quickly and efficiently on the ways educational bureaucracies workor more importantly, don't for children with special needs...</p>
            <p>ISBN: 978-0-9665-2668-4</p>
            <button><a href="https://www.amazon.com/Compromise-School-District-Without-Compromising/dp/0966526686/ref=sr_1_1?keywords=How+to+Compromise+with+your+school&qid=1564795047&s=books&sr=1-1">Learn More</a></button>
          </div>
          {/* <div className = "book-container">
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
          </div> */}
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
