import React from "react"
import "../form/form.scss"

function Form () {
  return (
    <>
      <div className="contact-form">

        <div>
          <h1>Contact Us</h1>
          <h3>Have a question or want to learn more about our services? We would love to hear from you. Send us a message and we will respond as soon as possible.</h3>
        </div>

        <form method="post" action="https://formspree.io/trainor.erin@gmail.com"> {/* change sendto email address here! */}
          <div>

            <label>
              <h3>Name</h3>
              <input type="text" name="name" id="name" required/>
            </label>

            <label>
              <h3>Phone</h3>
              <input type="tel" name="phone number" id="phone" />
            </label>

          </div>

          <div>

            <label>
              <h3>Email</h3>
              <input type="email" name="email" id="email" required/>
            </label>

            <label>
              <h3>Grade of Child</h3>
              <input type="text" name="child-age" id="child-age" />
            </label>

          </div>

          <div id= "services-container">

              <h2>Service Requested</h2>

              <div className="container">
                <ul className="option-list">
                  <li>
                    <input type="checkbox" id="checkboxOne" value="Advocacy"/>
                    <label htmlFor="checkboxOne">Advocacy</label>
                    </li>
                  <li>
                    <input type="checkbox" id="checkboxTwo" value="Advisory"/>
                    <label htmlFor="checkboxTwo">Advisory</label>
                    </li>
                  <li>
                    <input type="checkbox" id="checkboxThree" value="Other"/>
                    <label htmlFor="checkboxThree">Other</label>
                    </li>
                </ul>
              </div>

          </div>

          <div className = "subject">

            <label>
              <h3>Subject</h3>
              <input type="text" name="subject" id="subject" />
            </label>

          </div>

          <div className = "message">

            <label>
              <h3>Message</h3>
              <textarea name="message" id="message" rows="5" required/>
            </label>

          </div>

          <div className="send-button">
            <button type="submit">Send</button>
            {/* <input type="reset" value="Clear" /> */}
            <input type="text" name="_gotcha" style={{display:"none"}} />
          </div>
          
        </form>

      </div>
    </>
  )
}

export default Form
