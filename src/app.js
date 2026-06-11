const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

// Route Imports
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const educationRoutes = require('./routes/educationRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// ==========================================
// MIDDLEWARE CONFIGURATION
// ==========================================

// Production-ready CORS Configuration
const allowedOrigins = [
  'http://localhost:5173', // Vite development port
  'http://localhost:3000', // Alternative CRA development port
  'https://portfolio-frontend-mu-pied.vercel.app',
  // तपाईंको नयाँ फ्रन्टइन्ड यूआरएल यहाँ थप्नुहोस्:
  'https://portfolio-frontend-6040em129-infonkumarrai323-8883s-projects.vercel.app' 
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman, mobile apps, or server-to-server requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Standard Parsers & Logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// ==========================================
// API ROUTES
// ==========================================

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/contact', contactRoutes);

// Root Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Portfolio API is running smoothly' 
  });
});

// Fallback for undefined routes (404)
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`
  });
});

// ==========================================
// GLOBAL ERROR HANDLING
// ==========================================
app.use(errorHandler);

module.exports = app;