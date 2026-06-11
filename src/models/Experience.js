const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    responsibilities: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', experienceSchema);
