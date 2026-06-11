const { validationResult } = require('express-validator');
const skillService = require('../services/skillService');

const getSkills = async (req, res, next) => {
  try {
    const data = await skillService.listSkills(req.query);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const createSkill = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 422;
      error.errors = errors.array();
      throw error;
    }

    const skill = await skillService.createSkill(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (err) {
    next(err);
  }
};

const updateSkill = async (req, res, next) => {
  try {
    const skill = await skillService.updateSkill(req.params.id, req.body);
    res.json({ success: true, data: skill });
  } catch (err) {
    next(err);
  }
};

const deleteSkill = async (req, res, next) => {
  try {
    await skillService.deleteSkill(req.params.id);
    res.json({ success: true, message: 'Skill removed' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
