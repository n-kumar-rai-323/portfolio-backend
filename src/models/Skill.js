const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    level: { type: Number, min: 0, max: 100, default: 50 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);
