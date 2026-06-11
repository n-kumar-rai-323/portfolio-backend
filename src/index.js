const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// 1. Establish database connection immediately at the root level.
// Serverless instances will reuse this cached connection pool across requests.
connectDB();

// 2. ONLY for local development: Run the listener if executed directly on your PC.
// Vercel completely bypasses this block and reads the exported app module below.
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Local development server running on http://localhost:${PORT}`);
  });
}

// 3. CRITICAL FOR VERCEL: Export the Express app instance.
// Vercel's node builder consumes this module to route incoming serverless requests.
module.exports = app;