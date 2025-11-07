// Environment configuration for your React app
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-portfolio-api.onrender.com'  // Replace with your Render URL
  : 'http://localhost:1337';

export default API_BASE_URL;