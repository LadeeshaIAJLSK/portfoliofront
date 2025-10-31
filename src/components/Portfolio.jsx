import React, { useState, useEffect } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)

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
    { id: 'other', label: 'Other' }
  ]

  // Fetch data from Strapi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, skillsRes, certificatesRes] = await Promise.all([
          fetch('http://localhost:1337/api/projects?populate=*'),
          fetch('http://localhost:1337/api/skills?populate=*'),
          fetch('http://localhost:1337/api/certificates?populate=*')
        ])

        const projectsData = await projectsRes.json()
        const skillsData = await skillsRes.json()
        const certificatesData = await certificatesRes.json()

        setProjects(projectsData.data || [])
        setSkills(skillsData.data || [])
        setCertificates(certificatesData.data || [])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Skills data now comes from Strapi via useEffect above

  const education = [
    {
      id: 1,
      institution: "University of Moratuwa (Faculty of Information Technology )",
      program: "Faculty of Information Technology, University of Moratuwa",
      period: "2022 - Present",
      status: "Current"
    },
    {
      id: 2,
      institution: "Visakha Vidyalaya- Colombo 5",
      program: "GCE Advanced Level (A/L): Grades A, B, B",
      subProgram: "GCE Ordinary Level (O/L): 9A passes",
      period: "2015 - 2021",
      status: "Completed"
    },
    {
      id: 3,
      institution: "Kuli/Asedduma Subharathi Vidyalaya",
      program: "Scholarship Examination (Grade 5)",
      period: "2009 - 2015",
      status: "Completed"
    }
  ]

  const renderProjects = () => {
    if (loading) return <div className="loading">Loading projects...</div>
    
    return (
      <div className="projects-grid">
        {projects.map((project) => {
          const attrs = project.attributes || project
          
          // Handle different possible image data structures from Strapi
          let imageUrl = "https://via.placeholder.com/300x200/30363d/f97316?text=Project+Image"
          
          // Try different possible image URL structures
          if (attrs.image?.data?.[0]?.attributes?.url) {
            // Multiple images - take first one
            imageUrl = `http://localhost:1337${attrs.image.data[0].attributes.url}`
          } else if (attrs.image?.data?.attributes?.url) {
            // Single image - standard structure
            imageUrl = `http://localhost:1337${attrs.image.data.attributes.url}`
          } else if (attrs.image?.[0]?.url) {
            // Array of image objects
            imageUrl = `http://localhost:1337${attrs.image[0].url}`
          } else if (attrs.image?.url) {
            // Direct image object
            imageUrl = `http://localhost:1337${attrs.image.url}`
          }
          
          console.log(`Project "${attrs.title}" image URL:`, imageUrl)
          
          return (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={imageUrl} 
                  alt={attrs.title}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200/30363d/f97316?text=Project+Image"
                  }}
                />
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
                  <a href={attrs.github_link || "#"} className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={attrs.live_link || "#"} className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"/>
                      <path d="M11 7h6v6l-2-2-3 3-2-2 3-3-2-2z"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderExpertise = () => {
    if (loading) return <div className="loading">Loading skills...</div>
    
    return (
      <div className="expertise-section">
        <h3 className="expertise-title">My Expertise</h3>
        <div className="expertise-grid">
          {skills.map((skill) => {
            const attrs = skill.attributes || skill
            return (
              <div key={skill.id} className="expertise-item">
                <div className="progress-circle">
                  <svg className="progress-ring" width="120" height="120">
                    <circle
                      className="progress-ring-background"
                      stroke="#30363d"
                      strokeWidth="6"
                      fill="transparent"
                      r="54"
                      cx="60"
                      cy="60"
                    />
                    <circle
                      className="progress-ring-progress"
                      stroke="#f97316"
                      strokeWidth="6"
                      fill="transparent"
                      r="54"
                      cx="60"
                      cy="60"
                      strokeDasharray={`${2 * Math.PI * 54}`}
                      strokeDashoffset={`${2 * Math.PI * 54 * (1 - attrs.percentage / 100)}`}
                    />
                  </svg>
                  <div className="progress-icon">
                    {attrs.logo?.data?.attributes?.url ? (
                      <img 
                        src={`http://localhost:1337${attrs.logo.data.attributes.url}`} 
                        alt={attrs.name}
                        className="skill-logo"
                      />
                    ) : attrs.iconUrl ? (
                      <img 
                        src={attrs.iconUrl} 
                        alt={attrs.name}
                        className="skill-logo"
                      />
                    ) : getDefaultLogo(attrs.name) ? (
                      <img 
                        src={getDefaultLogo(attrs.name)} 
                        alt={attrs.name}
                        className="skill-logo"
                      />
                    ) : (
                      <span className="skill-icon-text">{attrs.icon || attrs.name.charAt(0)}</span>
                    )}
                  </div>
                </div>
                <div className="expertise-info">
                  <div className="expertise-percentage">{attrs.percentage}%</div>
                  <div className="expertise-name">{attrs.name}</div>
                </div>
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
        <h3 className="education-title">Education & Certificates</h3>
        <div className="education-timeline">
          {certificates.map((cert, index) => {
            const attrs = cert.attributes || cert
            return (
              <div key={cert.id} className="education-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index !== certificates.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="education-content">
                  <div className="education-institution">{attrs.issuer}</div>
                  <div className="education-program">{attrs.title}</div>
                  {attrs.description && (
                    <div className="education-subprogram">
                      {typeof attrs.description === 'string' 
                        ? attrs.description 
                        : attrs.description?.[0]?.children?.[0]?.text || ''
                      }
                    </div>
                  )}
                  <div className="education-period">{attrs.date_issued}</div>
                </div>
              </div>
            )
          })}
          {/* Add static education data */}
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

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return renderProjects()
      case 'expertise':
        return renderExpertise()
      case 'education':
        return renderEducation()
      case 'other':
        return <div className="coming-soon">Other projects coming soon...</div>
      default:
        return (
          <>
            {renderProjects()}
            {renderExpertise()}
            {renderEducation()}
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
    </section>
  )
}

export default Portfolio