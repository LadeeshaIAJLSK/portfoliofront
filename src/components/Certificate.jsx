import React from 'react'
import './Certificate.css'

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      image: "/api/placeholder/300/200",
      verificationLink: "#"
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      image: "/api/placeholder/300/200",
      verificationLink: "#"
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      issuer: "Coursera",
      date: "2023",
      image: "/api/placeholder/300/200",
      verificationLink: "#"
    }
  ]

  return (
    <section className="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
                <a href={cert.verificationLink} className="verify-link">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate