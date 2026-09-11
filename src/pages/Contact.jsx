import React, { useState } from 'react'

function Contact() {
  // just storing the form values, not actually sending them anywhere for this sprint
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    alert('Thanks for reaching out, ' + name + '! (this is just a static demo form)')
  }

  return (
    <div id="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} id="contact-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-input"
        />
        <button type="submit" id="contact-submit-button">Send</button>
      </form>
    </div>
  )
}

export default Contact
