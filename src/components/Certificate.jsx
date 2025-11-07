import React, { useState, useEffect } from 'react'
import './Certificate.css'

const Certificate = () => {
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)

  // Load static certificate data
  useEffect(() => {
    import('../data/portfolioData.js').then((data) => {
      setCertificates(data.portfolioData.certificates || [])
      setLoading(false)
    }).catch((error) => {
      console.error('Error loading certificates:', error)
      setCertificates([])
      setLoading(false)
    })
  }, [])

  // Process static certificates - only show ones with images
  const validCertificates = certificates.filter(cert => {
    return cert.image && cert.image.length > 0
  }).map(cert => {
    const imageUrl = cert.image
    
    return {
      id: cert.id,
      title: cert.title,
      issuer: cert.issuer,
      date: cert.date,
      description: cert.description,
      image: imageUrl
    }
  })

  if (loading) {
    return (
      <section className="certificates">
        <div className="container">
          <h2 className="section-title">Certificates</h2>
          <div className="loading">Loading certificates...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">My professional certifications and achievements</p>
        {validCertificates.length === 0 ? (
          <div className="no-certificates">
            <p>No certificates uploaded yet. Add certificates in your admin panel.</p>
          </div>
        ) : (
          <div className="certificates-grid">
            {validCertificates.map((cert) => (
              <div key={cert.id} className="certificate-card-simple">
                <img 
                  src={cert.image} 
                  alt={cert.alt}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificate