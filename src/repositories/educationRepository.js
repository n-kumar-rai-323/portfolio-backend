const Education = require('../models/Education');

const findEducations = async (filter, options) => {
  const total = await Education.countDocuments(filter);
  const educations = await Education.find(filter)
    .sort({ year: -1 })
    .skip(options.skip)
    .limit(options.limit);
  return { total, educations };
};

const createEducation = async (payload) => Education.create(payload);
const updateEducation = async (id, payload) => Education.findByIdAndUpdate(id, payload, { new: true });
const deleteEducation = async (id) => Education.findByIdAndDelete(id);

module.exports = {
  findEducations,
  createEducation,
  updateEducation,
  deleteEducation,
};
