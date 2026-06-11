const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true, trim: true },
    institute: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
    summary: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Education', educationSchema);
