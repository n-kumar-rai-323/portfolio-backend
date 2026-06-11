const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    technologies: [{ type: String, trim: true }],
    liveLink: { type: String, trim: true },
    repoLink: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    category: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
