import React from "react"
// import ReactDOM from 'react-dom'
import "../resources-page/resources-page.scss"
import { Link } from "gatsby"
import Mailchimp from "../../post-template-details"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'


function Resources () {
  return (
    <>
      <div>
        <h1>Recommended Reading</h1>
        {/* <h2>Blog Posts</h2>
        <div className="resources-deck">
          <div id="left-card" className="card">
            <h2>5 terms you should be familiar with when negotiating your child’s IEP. </h2>
            <p>Cupcake ipsum dolor sit amet cookie. Lemon drops cake candy tiramisu toffee cotton candy chocolate bar dessert dessert. Cupcake gummi bears apple pie...</p>
            <button><a href="https://image.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788951.jpg">Learn More</a>{/*<Link to="/contact-form">Learn More</Link></button>
          </div>
          <div id="center-card" className="card">
            <h2>Really Interesting Information</h2>
            <p>Cupcake ipsum dolor sit amet cookie. Lemon drops cake candy tiramisu toffee cotton candy chocolate bar dessert dessert. Cupcake gummi bears apple pie...</p>
            <button><a href="https://image.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788951.jpg">Learn More</a>{/*<Link to="/contact-form">Learn More</Link></button>
          </div>
          <div id="right-card" className="card">
            <h2>Really Interesting Information</h2>
            <p>Cupcake ipsum dolor sit amet cookie. Lemon drops cake candy tiramisu toffee cotton candy chocolate bar dessert dessert. Cupcake gummi bears apple pie...</p>
            <button><a href="https://image.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788951.jpg" >Learn More</a>{/*<Link to="/contact-form">Learn More</Link></button>
          </div>
        </div>
        <Mailchimp /> */}
        <h2>Library</h2>
        <div className="books">
          <div className = "book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51HmFO63RpL._SX332_BO1,204,203,200_.jpg"/>
            <p className = "title">Your Special Education Rights: What Your School District isn't Telling You.</p>
            <p className="author">By: Jennifer Laviano & Julie Swanson</p>
            {/* <p>ISBN:978-1-5107-1939-2</p> */}
            <p className="description">It all seems very simple. A special education law, the Individuals with Disabilities Act (IDEA), was enacted by Congress in 1975 to ensure that children with disabilities have the opportunity to receive a free appropriate public education, just like other children. But nothing is ever simple...</p>
            <button><a href="https://www.amazon.com/Your-Special-Education-Rights-District/dp/1510719393" target="_blank">Learn More</a></button>
          </div>
          <div className = "book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41Feqk01C-L._SX331_BO1,204,203,200_.jpg"/>
            <p className = "title">The Art of Advocacy: A Parents Guide to a Collaborative IEP Process</p>
            <p className="author">By: Charmaine Thaner</p>
            {/* <p>ISBN:978-1-5192-8473-0</p> */}
            <p className="description">Bringing Cookies to IEP Meetings Will Only Get You So Far! You’ve gone to IEP workshop after IEP workshop, searched for answers at conferences, done late night research on the internet, and yet you still have those guilty feelings that you’re not doing a good enough job advocating for your child. It takes more than gathering records, giving factual information or reciting research and the law to be a successful advocate for your child...</p>
            <button><a href="https://www.amazon.com/Art-Advocacy-Parents-Collaborative-Process/dp/151928473X" target="_blank">Learn More</a></button>
          </div>
          <div className = "book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51y2GksDs7L._SX363_BO1,204,203,200_.jpg"/>
            <p className = "title">How ot Compromise with Your School District Without Compromising Your Child</p>
            <p className="author">By: Gary Mayerson</p>
            {/* <p>ISBN: 978-0-9665-2668-4</p> */}
            <p className="description">The guide that every parent must have! Gary Mayerson has devoted his career in law to helping children with autism get the fair and appropriate education that they need and deserve. In this field guide, he brings parents up to speed quickly and efficiently on the ways educational bureaucracies workor more importantly, don't for children with special needs...</p>
            <button><a href="https://www.amazon.com/Compromise-School-District-Without-Compromising/dp/0966526686/ref=sr_1_1?keywords=How+to+Compromise+with+your+school&qid=1564795047&s=books&sr=1-1" target="_blank">Learn More</a></button>
          </div>
          {/* <div className = "book-container">
            <img/>
            <p className = "title">Name of Book</p>
            <author>I wrote the book</author>
            <p>ISBN:#############</p>
            <p>Description of Book</p>
            <a>Amazon Link or Button</a>
          </div>
          <div className = "book-container">
            <img/>
            <p className = "title">Name of Book</p>
            <author>I wrote the book</author>
            <p>ISBN:#############</p>
            <p>Description of Book</p>
            <a>Amazon Link or Button</a>
          </div> */}
        </div>
        <h2><FontAwesomeIcon icon={faBalanceScale} className="icon" />Special Education Laws</h2>
        <div className="outside-links">
        <ul>Federal Law
            <li><a href="/https://sites.ed.gov/idea/" target="_blank">Individuals with Disabilities Education Act (IDEA)</a></li>
          </ul>
          <ul> Washington Administrative Code (WAC)
            <li><a href="https://apps.leg.wa.gov/WAC/default.aspx?cite=392-172A-03090" target="_blank">Definition of Individualized Education Program (IEP)</a></li>
            <li><a href="https://apps.leg.wa.gov/WAC/default.aspx?cite=392-172A" target="_blank">Rules for the Provision of Special Education</a></li>
            
          </ul>
          <ul> Washington State Office of Superintendent of Public Instruction
            <li><a href="https://www.k12.wa.us/student-success/special-education/guidance-families-special-education-washington-state/parent-and" target="_blank">Parent and Student Rights</a></li>
            <li><a href="https://www.k12.wa.us/student-success/special-education/program-improvement/technical-assistance/evaluation-and-iep" target="_blank">Evaluation and IEP Technical Assistance Module</a></li>
          </ul>
        </div>
        <h2><FontAwesomeIcon icon={faNewspaper} className="icon" />Interesting Articles</h2>
        <div className="outside-links">
          <ul>
            <li><a href="https://www.seattletimes.com/education-lab/for-some-washington-students-with-special-needs-diagnosis-comes-too-late/" target="_blank">For some Washington Students with special needs, diagnosis is too late, help is too little</a> - Seattle Times, July 9, 2019</li>
            <li><a href="/https://www.seattletimes.com/education-lab/why-washington-is-suddenly-paying-more-attention-to-its-25500-paraeducators/" target="_blank">‘Basically I’m their teacher’: Washington has big plans for its 25,500 school paraeducators</a> - Seattle Times, July 28, 2019</li>
            {/* <li><a href="https://www.seattletimes.com/education-lab/students-with-dyslexia-struggle-in-washington-will-a-fresh-approach-to-reading-instruction-be-enough/" target="_blank">Students with dyslexia struggle in Washington. Will a fresh approach to reading instruction be enough?</a> - Seattle Times, July 8, 2019</li> */}
            <li><a href="https://www.seattletimes.com/education-lab/special-education-can-be-confusing-here-are-terms-and-programs-you-should-know/" target="_blank">Special education can be confusing. Here are terms and programs you should know.</a> - Seattle Times, May 24, 2019</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Resources
