const experienceRepository = require('../repositories/experienceRepository');

const listExperiences = async (query) => {
  const options = {
    skip: (Number(query.page || 1) - 1) * (Number(query.limit || 10)),
    limit: Number(query.limit || 10),
  };
  return experienceRepository.findExperiences({}, options);
};

const createExperience = async (payload) => experienceRepository.createExperience(payload);
const updateExperience = async (id, payload) => experienceRepository.updateExperience(id, payload);
const deleteExperience = async (id) => experienceRepository.deleteExperience(id);

module.exports = {
  listExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
