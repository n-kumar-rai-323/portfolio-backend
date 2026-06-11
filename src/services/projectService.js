const projectRepository = require('../repositories/projectRepository');

const listProjects = async (query) => {
  const filter = {};
  if (query.search) {
    filter.title = { $regex: query.search, $options: 'i' };
  }
  const options = {
    skip: (Number(query.page || 1) - 1) * (Number(query.limit || 10)),
    limit: Number(query.limit || 10),
  };
  return projectRepository.findProjects(filter, options);
};

const createProject = async (payload) => projectRepository.createProject(payload);
const updateProject = async (id, payload) => projectRepository.updateProject(id, payload);
const deleteProject = async (id) => projectRepository.deleteProject(id);

module.exports = {
  listProjects,
  createProject,
  updateProject,
  deleteProject,
};
