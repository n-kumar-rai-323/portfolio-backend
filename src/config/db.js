const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI environment variable is missing');
  }

  try {
    // Mongoose v6/v7/v8 handles parser options automatically
    await mongoose.connect(uri);
    console.log('MongoDB successfully connected...');
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    // Safe failure exit point
    process.exit(1); 
  }
};

module.exports = connectDB;