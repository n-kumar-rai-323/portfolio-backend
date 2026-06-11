const Project = require('../models/Project');

const findProjects = async (filter, options) => {
  const total = await Project.countDocuments(filter);
  const projects = await Project.find(filter)
    .sort({ createdAt: -1 })
    .skip(options.skip)
    .limit(options.limit);
  return { total, projects };
};

const createProject = async (payload) => {
  return Project.create(payload);
};

const updateProject = async (id, payload) => {
  return Project.findByIdAndUpdate(id, payload, { new: true });
};

const deleteProject = async (id) => {
  return Project.findByIdAndDelete(id);
};

module.exports = {
  findProjects,
  createProject,
  updateProject,
  deleteProject,
};
