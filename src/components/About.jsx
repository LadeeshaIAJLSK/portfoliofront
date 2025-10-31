import React from 'react'
import './About.css'

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-subtitle">"Keep building, keep learning."</p>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro-paragraph">
              I'm <strong>Ladeesha Karunasinghe</strong>, a Software Engineering Intern and Full-Stack Developer, currently studying Information Technology at the University of Moratuwa. I enjoy building creative, practical, and impactful software solutions while constantly learning and exploring new ideas.
            </p>
            
            <p className="skills-paragraph">
              I'm skilled in <strong>JavaScript, Python, Java, C, React, Node.js, Next.js, HTML, CSS, PHP, Firebase, Strapi, MongoDB, and PostgreSQL</strong>. I also use <strong>Figma and Lucidchart</strong> for design and system planning.
            </p>
            
            <p className="personality-paragraph">
              I'm a team player who loves taking on new challenges, learning new technologies, and improving through hands-on experience. Outside of coding, I'm always curious about how technology keeps evolving and shaping the world around us.
            </p>
            
            <button className="contact-me-btn" onClick={scrollToContact}>Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About