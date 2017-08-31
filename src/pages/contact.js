import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div>
    <h1>Talk to me.</h1>
    <p>I am available for freelance projects.</p>

    <form className="contact-form" action="https://formspree.io/8ctopotamus@gmail.com" method="POST">
      <label htmlFor="name">Name *</label>
      <input type="text" name="name" placeholder="Name" required />
      <label htmlFor="email">Email *</label>
      <input type="email" name="_replyto" placeholder="Email" required />
      <label htmlFor="interest">I am interested in *</label>
      <select name="interest" required>
        <option value="quote">Quote</option>
        <option value="consultation">Consultation</option>
        <option value="hi">Just saying "hi"</option>
      </select>
      <label htmlFor="interest">Tell me what's up *</label>
    	<textarea name="message" placeholder="Message" required></textarea>
      <input type="hidden" name="_subject" value="Zylo site submission!" />
      <input type="hidden" name="_next" value="//site.io/thanks.html" />
    	<input type="text" name="_gotcha" style={{display:'none'}} />
      <input type="submit" value="Send"/>
    </form>
  </div>
)

export default ContactPage
