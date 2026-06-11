const { validationResult } = require('express-validator');
const experienceService = require('../services/experienceService');

const getExperiences = async (req, res, next) => {
  try {
    const data = await experienceService.listExperiences(req.query);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const createExperience = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 422;
      error.errors = errors.array();
      throw error;
    }
    const experience = await experienceService.createExperience(req.body);
    res.status(201).json({ success: true, data: experience });
  } catch (err) {
    next(err);
  }
};

const updateExperience = async (req, res, next) => {
  try {
    const experience = await experienceService.updateExperience(req.params.id, req.body);
    res.json({ success: true, data: experience });
  } catch (err) {
    next(err);
  }
};

const deleteExperience = async (req, res, next) => {
  try {
    await experienceService.deleteExperience(req.params.id);
    res.json({ success: true, message: 'Experience removed' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getExperiences, createExperience, updateExperience, deleteExperience };
