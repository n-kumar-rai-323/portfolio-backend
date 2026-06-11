const Experience = require('../models/Experience');

const findExperiences = async (filter, options) => {
  const total = await Experience.countDocuments(filter);
  const experiences = await Experience.find(filter)
    .sort({ createdAt: -1 })
    .skip(options.skip)
    .limit(options.limit);
  return { total, experiences };
};

const createExperience = async (payload) => Experience.create(payload);
const updateExperience = async (id, payload) => Experience.findByIdAndUpdate(id, payload, { new: true });
const deleteExperience = async (id) => Experience.findByIdAndDelete(id);

module.exports = {
  findExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
