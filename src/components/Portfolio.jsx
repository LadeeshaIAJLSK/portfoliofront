import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import './Skills.css'

// Import all skill images
import reactImg from '../assets/react.png'
import mongodbImg from '../assets/mongodb.png'
import mysqlImg from '../assets/mysql.png'
import javascriptImg from '../assets/javascript.png'
import phpImg from '../assets/php.png'
import cssImg from '../assets/css.png'
import htmlImg from '../assets/html.png'
import gitImg from '../assets/git.png'
import nodejsImg from '../assets/nodejs.png'
import figmaImg from '../assets/figma.png'
import firebaseImg from '../assets/firebase.png'
import cImg from '../assets/c.png'
import javaImg from '../assets/java.png'

// Import project images
import project1_1 from '../assets/project1.1.png'
import project1_2 from '../assets/project1.2.png'
import project1_3 from '../assets/project1.3.png'
import project2_1 from '../assets/project2.1.png'
import project2_2 from '../assets/project2.2.png'
import project2_3 from '../assets/project2.3.png'
import project3_1 from '../assets/project3.1.png'
import project3_2 from '../assets/project3.2.png'
import project3_3 from '../assets/project3.3.png'
import project4_1 from '../assets/project4.1.jpg'
import project4_2 from '../assets/project4.2.jpg'
import project4_3 from '../assets/project4.3.jpg'
import project5_1 from '../assets/project5.1.png'
import project5_2 from '../assets/project5.2.png'
import project5_3 from '../assets/project5.3.png'

// Import certificate images
import certificate1 from '../assets/certificate1.png'
import certificate2 from '../assets/certificate2.png'
import certificate3 from '../assets/certificate3.png'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState({})
  const [zoomedImage, setZoomedImage] = useState(null)

  // Function to handle image switching in carousel gallery
  const switchToImage = (projectId, imageIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [projectId]: imageIndex
    }))
  }

  // Function to handle image zoom
  const handleImageClick = (imageSrc, altText) => {
    setZoomedImage({ src: imageSrc, alt: altText })
  }

  // Function to close zoom modal
  const closeZoom = () => {
    setZoomedImage(null)
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && zoomedImage) {
        closeZoom()
      }
    }
    
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [zoomedImage])

  // Helper function to get default logos for common technologies
  const getDefaultLogo = (skillName) => {
    const name = skillName.toLowerCase()
    const logoMap = {
      'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'reactjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'node': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'html5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'ts': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'vuejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      'scss': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
    }
    return logoMap[name] || null
  }

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'projects', label: 'Projects' },
    { id: 'expertise', label: 'My Expertise' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' }
  ]

  // Load static data 
  useEffect(() => {
    // Import static data
    import('../data/portfolioData.js').then((data) => {
      // Load static projects first, then Strapi projects will be added
      setProjects(data.portfolioData.projects || [])
      setSkills(data.portfolioData.skills || [])
      setCertificates(data.portfolioData.certificates || [])
      setLoading(false)
    }).catch((error) => {
      console.error('Error loading data:', error)
      setLoading(false)
    })
  }, [])

  // Fetch additional projects from Strapi backend
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337'

    const fetchStrapiProjects = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/projects?populate=*`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        const strapiProjects = data.data || data || []
        
        // Append Strapi projects to existing static projects
        if (strapiProjects.length > 0) {
          setProjects(prev => [...prev, ...strapiProjects])
        }
      } catch (err) {
        console.error('Error fetching projects from Strapi:', err)
        // Silently fail, keep static projects only
      }
    }

    // Only fetch if not loading (static data loaded first)
    if (!loading) {
      fetchStrapiProjects()
    }
  }, [loading])

  // Skills data now comes from Strapi via useEffect above

  const education = [
    {
      id: 1,
      institution: "University of Moratuwa (Faculty of Information Technology )",
      program: "Faculty of Information Technology, University of Moratuwa",
      subProgram: "CGPA: 3.35",
      period: "2022 - Present",
      status: "Current"
    },
    {
      id: 2,
      institution: "Visakha Vidyalaya- Colombo 5",
      program: "GCE Advanced Level (A/L): Grades A, B, B",
      period: "2011 - 2020",
      status: "Completed"
    },
    {
      id: 3,
      institution: "Visakha Vidyalaya- Colombo 5",
      program: "GCE Ordinary Level (O/L): 9A passes",
      period: "2011 - 2020",
      status: "Completed"
    },
    {
      id: 4,
      institution: "Kuli/Asedduma Subharathi Vidyalaya",
      program: "Scholarship Examination (Grade 5) - Marks: 179",
      period: "2006 - 2010",
      status: "Completed"
    }
  ]

  // Function to get project images (local assets or Strapi URLs)
  const getProjectImages = (project) => {
    const attrs = project.attributes || project
    
    // Check if this is a local static project with asset images
    if (attrs.images && Array.isArray(attrs.images)) {
      return attrs.images.map(imagePath => {
        // Map asset paths to imported images
        const imageMap = {
          '/src/assets/project1.1.png': project1_1,
          '/src/assets/project1.2.png': project1_2,
          '/src/assets/project1.3.png': project1_3,
          '/src/assets/project2.1.png': project2_1,
          '/src/assets/project2.2.png': project2_2,
          '/src/assets/project2.3.png': project2_3,
          '/src/assets/project3.1.png': project3_1,
          '/src/assets/project3.2.png': project3_2,
          '/src/assets/project3.3.png': project3_3,
          '/src/assets/project4.1.jpg': project4_1,
          '/src/assets/project4.2.jpg': project4_2,
          '/src/assets/project4.3.jpg': project4_3,
          '/src/assets/project5.1.png': project5_1,
          '/src/assets/project5.2.png': project5_2,
          '/src/assets/project5.3.png': project5_3
        }
        return imageMap[imagePath] || imagePath
      })
    }
    
    // Handle Strapi images (from API)
    let images = []
    if (attrs.image && Array.isArray(attrs.image) && attrs.image.length > 0) {
      // Strapi v5: Multiple images array - direct in attrs.image
      images = attrs.image.map(img => {
        const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
        if (img.url) {
          return img.url.startsWith('http') ? img.url : `${API_BASE_URL}${img.url}`
        } else if (img.attributes?.url) {
          return img.attributes.url.startsWith('http') ? img.attributes.url : `${API_BASE_URL}${img.attributes.url}`
        }
        return null
      }).filter(Boolean)
    } else if (attrs.image?.data && Array.isArray(attrs.image.data)) {
      // Strapi v4: Multiple images in data array
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
      images = attrs.image.data.map(img => `${API_BASE_URL}${img.attributes.url}`)
    } else if (attrs.image?.data?.attributes?.url) {
      // Strapi v4: Single image
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
      images = [`${API_BASE_URL}${attrs.image.data.attributes.url}`]
    }
    
    // Fallback if no images
    if (images.length === 0) {
      images = ["https://via.placeholder.com/300x200/30363d/f97316?text=Project+Image"]
    }
    
    return images
  }

  const renderProjects = () => {
    if (loading) return <div className="loading">Loading projects...</div>
    
    return (
      <div className="projects-section">
        <h3 className="expertise-title">My Projects</h3>
        <div className="projects-grid">
        {projects.map((project) => {
          const attrs = project.attributes || project
          const images = getProjectImages(project)
          
          // Get current active image index (default to 0)
          const currentImageIndex = activeImageIndex[project.id] || 0
          const currentImage = images[currentImageIndex]
          
          return (
            <div key={project.id} className="project-card">
              <div className="project-image-carousel">
                {/* Single image display area */}
                <div className="carousel-image">
                  <img 
                    src={currentImage} 
                    alt={`${attrs.title} - Image ${currentImageIndex + 1}`}
                    onClick={() => handleImageClick(currentImage, `${attrs.title} - Image ${currentImageIndex + 1}`)}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200/30363d/f97316?text=Project+Image"
                    }}
                  />
                </div>
                
                {/* Navigation dots (only show if multiple images) */}
                {images.length > 1 && (
                  <div className="carousel-dots">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => switchToImage(project.id, index)}
                        title={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Image counter */}
                {images.length > 1 && (
                  <div className="image-counter">
                    <span>{currentImageIndex + 1} / {images.length}</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{attrs.title}</h3>
                <p className="project-description">
                  {typeof attrs.description === 'string' 
                    ? attrs.description 
                    : attrs.description?.[0]?.children?.[0]?.text || 'No description available'
                  }
                </p>
                <div className="project-technologies">
                  {attrs.technologies && Array.isArray(attrs.technologies) && attrs.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {/* Handle dual GitHub links (backend + frontend) */}
                  {attrs.github_backend && attrs.github_frontend ? (
                    <>
                      <a href={attrs.github_backend} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Backend
                      </a>
                      <a href={attrs.github_frontend} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Frontend
                      </a>
                    </>
                  ) : (
                    /* Handle single GitHub link */
                    attrs.github_link && (
                      <a href={attrs.github_link} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )
                  )}
                  
                  {/* Live demo link (if available) */}
                  {attrs.live_link && (
                    <a href={attrs.live_link} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"/>
                        <path d="M11 7h6v6l-2-2-3 3-2-2 3-3-2-2z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }

  // Function to get the correct image for each skill
  const getSkillImage = (skillName) => {
    const imageMap = {
      'react': reactImg,
      'mongodb': mongodbImg,
      'mysql': mysqlImg,
      'javascript': javascriptImg,
      'php': phpImg,
      'css': cssImg,
      'html': htmlImg,
      'git': gitImg,
      'nodejs': nodejsImg,
      'figma': figmaImg,
      'firebase': firebaseImg,
      'c': cImg,
      'java': javaImg
    };
    
    return imageMap[skillName] || null;
  };

  const renderExpertise = () => {
    if (loading) return <div className="loading">Loading skills...</div>
    
    return (
      <div className="expertise-section">
        <h3 className="expertise-title">My Expertise</h3>
        <div className="skills-grid">
          {skills.map((skill) => {
            const progressDegree = (skill.percentage / 100) * 360;
            const skillImage = getSkillImage(skill.name);
            
            return (
              <div key={skill.id} className="skill-item">
                <div className="skill-circle">
                  <div 
                    className="progress-circle" 
                    style={{"--progress": `${progressDegree}deg`}}
                  >
                    <div className="skill-icon">
                      {skillImage ? (
                        <img 
                          src={skillImage} 
                          alt={skill.name}
                          className="skill-image"
                        />
                      ) : (
                        <span className="skill-fallback">{skill.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="skill-percentage">{skill.percentage}%</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderEducation = () => {
    if (loading) return <div className="loading">Loading education...</div>
    
    return (
      <div className="education-section">
        <h3 className="education-title">Education</h3>
        <div className="education-timeline">
          {/* Add static education data only */}
          {education.map((edu, index) => (
            <div key={`edu-${edu.id}`} className="education-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== education.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="education-content">
                <div className="education-institution">{edu.institution}</div>
                <div className="education-program">{edu.program}</div>
                {edu.subProgram && (
                  <div className="education-subprogram">{edu.subProgram}</div>
                )}
                <div className="education-period">{edu.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderCertificates = () => {
    if (loading) return <div className="loading">Loading certificates...</div>
    
    // Map asset paths to imported certificate images
    const certificateImageMap = {
      '/src/assets/certificate1.png': certificate1,
      '/src/assets/certificate2.png': certificate2,
      '/src/assets/certificate3.png': certificate3
    }
    
    // Process certificates (both local and Strapi)
    const validCertificates = certificates.map(cert => {
      const attrs = cert.attributes || cert
      
      // Handle local certificates from portfolioData
      if (attrs.image && typeof attrs.image === 'string' && attrs.image.startsWith('/src/assets/')) {
        return {
          id: cert.id,
          image: certificateImageMap[attrs.image] || attrs.image,
          alt: attrs.title || 'Certificate',
          title: attrs.title,
          issuer: attrs.issuer,
          date: attrs.date,
          description: attrs.description
        }
      }
      
      // Handle Strapi certificates
      if (attrs.image && Array.isArray(attrs.image) && attrs.image.length > 0) {
        const imageUrl = `http://localhost:1337${attrs.image[0].url}`
        return {
          id: cert.id,
          image: imageUrl,
          alt: attrs.title || 'Certificate',
          title: attrs.title,
          issuer: attrs.issuer,
          date: attrs.date,
          description: attrs.description
        }
      }
      
      return null
    }).filter(Boolean)
    
    return (
      <div className="certificates-section">
        <h3 className="expertise-title">My Certificates</h3>
        {validCertificates.length === 0 ? (
          <div className="no-certificates">
            <p>No certificates available yet.</p>
          </div>
        ) : (
          <div className="certificates-horizontal">
            {validCertificates.map((cert) => (
              <div key={cert.id} className="certificate-image-card">
                <img 
                  src={cert.image} 
                  alt={cert.alt}
                  onClick={() => openZoom(cert.image)}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return renderProjects()
      case 'expertise':
        return renderExpertise()
      case 'education':
        return renderEducation()
      case 'certificates':
        return renderCertificates()
      default:
        return (
          <>
            {renderProjects()}
            {renderExpertise()}
            {renderEducation()}
            {renderCertificates()}
          </>
        )
    }
  }

  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="portfolio-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="portfolio-content">
          {renderContent()}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className="image-zoom-modal" onClick={closeZoom}>
          <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close-btn" onClick={closeZoom} aria-label="Close zoom">
              ×
            </button>
            <img 
              src={zoomedImage.src} 
              alt={zoomedImage.alt}
              className="zoomed-image"
            />
            <div className="zoom-image-info">
              {zoomedImage.alt}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio