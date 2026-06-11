const educationRepository = require('../repositories/educationRepository');

const listEducations = async (query) => {
  const options = {
    skip: (Number(query.page || 1) - 1) * (Number(query.limit || 10)),
    limit: Number(query.limit || 10),
  };
  return educationRepository.findEducations({}, options);
};

const createEducation = async (payload) => educationRepository.createEducation(payload);
const updateEducation = async (id, payload) => educationRepository.updateEducation(id, payload);
const deleteEducation = async (id) => educationRepository.deleteEducation(id);

module.exports = {
  listEducations,
  createEducation,
  updateEducation,
  deleteEducation,
};
