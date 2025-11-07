// Static data for your portfolio - replace Strapi API
export const portfolioData = {
  // Your projects data
  projects: [
    {
      id: 1,
      title: "Hotel Management System- Group Project",
      description: "The Hotel Management Application is a unified system that streamlines operations across five key modules: Reception, Restaurant, Owner, Kitchen, and Housekeeping. It manages guest reservations, food orders, room availability, cleaning schedules, and overall performance reporting. Together, these modules ensure efficient coordination, improved service quality, and smooth hotel management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
      github_backend: "https://github.com/LadeeshaIAJLSK/HMS- NEXTGENCODERS-backend",
      github_frontend: "https://github.com/LadeeshaIAJLSK/HMS_NEXTGENCODERS-fronded",
      images: [
        "/src/assets/project1.1.png",
        "/src/assets/project1.2.png", 
        "/src/assets/project1.3.png"
      ]
    },
    {
      id: 2,
      title: "Full-Stack Personal Blog Platform -individual Project",
      description: "This personal blog platform allows me to create, edit, and delete blog posts with image uploads. Visitors can read my posts, leave comments, and like content they enjoy. The platform includes user registration and login functionality, so readers can create accounts to interact with posts. I have admin access to manage all content through a dedicated dashboard, while maintaining full control over my blog posts and user interactions.",
      technologies: ["React", "JavaScript", "CSS", "Bootstrap", "Node.js", "Express.js", "MongoDB", "JWT"],
      github_backend: "https://github.com/LadeeshaIAJLSK/blog-back",
      github_frontend: "https://github.com/LadeeshaIAJLSK/blog-front",
      images: [
        "/src/assets/project4.1.jpg",
        "/src/assets/project4.2.jpg",
        "/src/assets/project4.3.jpg"
      ]
    },
    {
      id: 3,
      title: "Paper Heroes - Individual Project",
      description: "Developed a Recycling Awareness Website using React for the frontend and Firebase for real-time data storage and user authentication. The platform promotes sustainable recycling practices through an engaging and responsive UI. It includes an admin dashboard that allows administrators to add, edit, and delete projects, manage members, and publish blogs to educate users about environmental conservation. The system ensures seamless updates, interactive content, and active community participation to inspire eco-friendly habits.",
      technologies: ["React", "JavaScript", "CSS", "Firebase"],
      github_link: "https://github.com/LadeeshaIAJLSK/paperhero/tree/master/phero",
      live_link: "https://paperhero.netlify.app/",
      images: [
        "/src/assets/project2.1.png",
        "/src/assets/project2.2.png",
        "/src/assets/project2.3.png"
      ]
    },
    {
      id: 4,
      title: "Text-to-Image Generator - Individual Project",
      description: "AI Image Generator is a web app that creates AI artwork from text prompts. Users simply type what they want to see, select an AI model (FLUX, Anime, Realism), and generate up to 4 images instantly. Features dark/light themes, mobile-responsive design, and works completely free without registration using Pollinations AI.",
      technologies: ["HTML", "CSS", "JavaScript", "Pollinations AI"],
      github_link: "https://github.com/LadeeshaIAJLSK/Text-to-image-generator",
      live_link: "https://text-to-image-karunasingheiajls.netlify.app/",
      images: [
        "/src/assets/project3.1.png",
        "/src/assets/project3.2.png",
        "/src/assets/project3.3.png"
      ]
    },
    {
      id: 5,
      title: "Modern E-Commerce Platform - Individual Project (On going)",
      description: "A full-stack e-commerce application built with Next.js and MongoDB, featuring user authentication, product management, shopping cart functionality, and seller dashboard. The platform supports both customers and sellers with secure payment integration, real-time inventory management, and responsive design for seamless shopping experience across all devices.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
      github_link: "https://github.com/LadeeshaIAJLSK/quick_cart",
      images: [
        "/src/assets/project5.1.png",
        "/src/assets/project5.2.png",
        "/src/assets/project5.3.png"
      ]
    }
    // Add more projects here
  ],

  // Your skills data - using local images from assets folder
  skills: [
    { id: 1, name: "react", percentage: 85, category: "Frontend", image: "/src/assets/react.png" },
    { id: 2, name: "mongodb", percentage: 78, category: "Database", image: "/src/assets/mongodb.png" },
    { id: 3, name: "mysql", percentage: 79, category: "Database", image: "/src/assets/mysql.png" },
    { id: 4, name: "javascript", percentage: 70, category: "Programming", image: "/src/assets/javascript.png" },
    { id: 5, name: "php", percentage: 57, category: "Backend", image: "/src/assets/php.png" },
    { id: 6, name: "css", percentage: 85, category: "Frontend", image: "/src/assets/css.png" },
    { id: 7, name: "html", percentage: 90, category: "Frontend", image: "/src/assets/html.png" },
    { id: 8, name: "git", percentage: 80, category: "Tools", image: "/src/assets/git.png" },
    { id: 9, name: "nodejs", percentage: 60, category: "Backend", image: "/src/assets/nodejs.png" },
    { id: 10, name: "figma", percentage: 88, category: "Design", image: "/src/assets/figma.png" },
    { id: 11, name: "firebase", percentage: 60, category: "Backend", image: "/src/assets/firebase.png" },
    { id: 12, name: "c", percentage: 88, category: "Programming", image: "/src/assets/c.png" },
    { id: 13, name: "java", percentage: 75, category: "Programming", image: "/src/assets/java.png" }
  ],

  // Your certificates data
  certificates: [
    {
      id: 1,
      title: "Professional Certificate 1",
      issuer: "Technology Institute",
      date: "2024",
      description: "Completed advanced programming and development course",
      image: "/src/assets/certificate1.png"
    },
    {
      id: 2,
      title: "Professional Certificate 2",
      issuer: "Digital Academy", 
      date: "2024",
      description: "Web development and modern frameworks certification",
      image: "/src/assets/certificate2.png"
    },
    {
      id: 3,
      title: "Professional Certificate 3",
      issuer: "Innovation Center", 
      date: "2024",
      description: "Full-stack development and project management certification",
      image: "/src/assets/certificate3.png"
    }
    // Add more certificates here
  ]
};