const Skill = require('../models/Skill');

const findSkills = async (filter, options) => {
  const total = await Skill.countDocuments(filter);
  const skills = await Skill.find(filter)
    .sort({ category: 1, name: 1 })
    .skip(options.skip)
    .limit(options.limit);
  return { total, skills };
};

const createSkill = async (payload) => Skill.create(payload);
const updateSkill = async (id, payload) => Skill.findByIdAndUpdate(id, payload, { new: true });
const deleteSkill = async (id) => Skill.findByIdAndDelete(id);

module.exports = {
  findSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};
