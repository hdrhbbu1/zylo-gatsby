import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div className="contact-page">
    <h1>What's up? 💬</h1>

    <form className="contact-form" action="https://formspree.io/zylo.codes@gmail.com" method="POST">
      <label htmlFor="name">Name *</label>
      <input type="text" name="name" placeholder="Name" required />

      <label htmlFor="email">Email *</label>
      <input type="email" name="_replyto" placeholder="Email" required />

      <label htmlFor="phone">Phone *</label>
      <input type="tel" name="phone" placeholder="Phone" required />

      <label htmlFor="interest">Message me *</label>
    	<textarea name="message" placeholder="Message" required></textarea>

      <input type="hidden" name="_subject" value="Zylo site submission!" />
      <input type="hidden" name="_next" value="//zylocod.es/thanks" />
    	<input type="text" name="_gotcha" style={{display:'none'}} />
      <input type="submit" value="Talk to me 🗣️"/>
    </form>

    <p>Who knows... I might even send you a sticker.</p>
  </div>
)

export default ContactPage
