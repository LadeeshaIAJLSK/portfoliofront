import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      // Create a new FormData object for better compatibility
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_subject', `Portfolio Contact from ${formData.name}`)
      
      // Try Formspree first
      const formspreeEndpoint = 'https://formspree.io/f/mzzkjvjy'
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        console.log('Email sent successfully via Formspree')
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const errorData = await response.json()
        console.error('Formspree error:', errorData)
        
        // If Formspree fails, fall back to mailto
        const mailtoLink = `mailto:jazzladeesha@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Network error:', error)
      
      // Fallback to mailto if there's a network error
      const mailtoLink = `mailto:jazzladeesha@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsLoading(false)
    }
  }

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
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className="phone-numbers">
                  <a href="tel:+94760545235" style={{color: '#e6edf3', textDecoration: 'none', display: 'block'}}>
                    +94 760545235
                  </a>
                  <a href="tel:+94781682753" style={{color: '#e6edf3', textDecoration: 'none', display: 'block', marginTop: '0.25rem'}}>
                    +94 781682753
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.454-6.269h.91c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
                <a href="mailto:jazzladeesha@gmail.com" style={{color: '#e6edf3', textDecoration: 'none'}}>
                  jazzladeesha@gmail.com
                </a>
              </div>
              
              <div className="contact-method">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://linkedin.com/in/ladeeshaiajlsk/" target="_blank" rel="noopener noreferrer" style={{color: '#e6edf3', textDecoration: 'none'}}>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="contact-location">
              <div className="contact-method">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span style={{color: '#e6edf3'}}>
                  Kurunegala, Sri Lanka
                </span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className="status-message success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === 'error' && (
              <div className="status-message error">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="send-btn" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Backup mailto option */}
            <div style={{textAlign: 'center', marginTop: '1rem'}}>
              <p style={{color: '#8b949e', fontSize: '0.9rem'}}>
              Or email me directly: 
                <a 
                  href="mailto:jazzladeesha@gmail.com?subject=Portfolio Contact&body=Hi Ladeesha,%0D%0A%0D%0A"
                  style={{color: '#f97316', textDecoration: 'none', marginLeft: '0.5rem'}}
                >
                  jazzladeesha@gmail.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact