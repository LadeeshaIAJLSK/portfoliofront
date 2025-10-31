import React from 'react'
import './Contact.css'

const ContactSimple = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always open to discussing new opportunities, collaborations, 
              or just having a chat about technology and development.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.454-6.269h.91c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
                <a href="mailto:your.email@gmail.com" style={{color: '#e6edf3', textDecoration: 'none'}}>
                  your.email@gmail.com
                </a>
              </div>
              
              <div className="contact-method">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{color: '#e6edf3', textDecoration: 'none'}}>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          {/* Simple Formspree form - No JavaScript needed */}
          <form 
            className="contact-form" 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSimple