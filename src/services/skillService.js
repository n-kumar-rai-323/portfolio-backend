const skillRepository = require('../repositories/skillRepository');

const listSkills = async (query) => {
  const filter = {};
  if (query.category) {
    filter.category = query.category;
  }
  const options = {
    skip: (Number(query.page || 1) - 1) * (Number(query.limit || 10)),
    limit: Number(query.limit || 10),
  };
  return skillRepository.findSkills(filter, options);
};

const createSkill = async (payload) => skillRepository.createSkill(payload);
const updateSkill = async (id, payload) => skillRepository.updateSkill(id, payload);
const deleteSkill = async (id) => skillRepository.deleteSkill(id);

module.exports = {
  listSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};
