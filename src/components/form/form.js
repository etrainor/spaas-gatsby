import React from "react"
import "../form/form.scss"

function Form () {
  return (
    <>
      <div classname="contact-form">

        <div>
          <h1>Contact Us</h1>
          <h3>Have a question or want to learn more about our services? We would love to hear from you. Send us a message and we will respond as soon as possible.</h3>
        </div>

        <form method="post" action="https://formspree.io/trainor.erin@gmail.com"> {/* change sendto email address here! */}
          <div>

            <label>
              <h3>Name</h3><p classname="asterisk">*</p>
              <input type="text" name="name" id="name" required/>
            </label>

            <label>
              <h3>Phone</h3>
              <input type="tel" name="phone number" id="phone" />
            </label>

          </div>

          <div>

            <label>
              <h3>Email</h3><p classname="asterisk">*</p>
              <input type="email" name="email" id="email" required/>
            </label>

            <label>
              <h3>Age/Grade of Child</h3>
              <input type="text" name="child-age" id="child-age" />
            </label>

          </div>

          <div>

            <div>

              <h2>Service Requested</h2>

              <label>
                <input type="checkbox" name="advising" id="advising" />
                <h3>Advising</h3>
              </label>

              <label>
                <input type="checkbox" name="advocacy" id="advocacy" />
                <h3>Advocacy</h3>
              </label>

              <label>
                <input type="checkbox" name="other" id="other" />
                <h3>Other</h3>
              </label>
              
            </div>

            <label>
              <h3>School District</h3>
              <input type="text" name="school-district" id="school-district" />
            </label>

          </div>

          <div>

            <label>
              <h3>Subject</h3>
              <input type="text" name="subject" id="subject" />
            </label>

          </div>

          <div>

            <label>
              <h3>Message</h3><p classname="asterisk">*</p>
              <textarea name="message" id="message" rows="5" required/>
            </label>

          </div>

          <div>
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
