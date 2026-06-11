const { validationResult } = require('express-validator');
const educationService = require('../services/educationService');

const getEducations = async (req, res, next) => {
  try {
    const data = await educationService.listEducations(req.query);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const createEducation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 422;
      error.errors = errors.array();
      throw error;
    }
    const education = await educationService.createEducation(req.body);
    res.status(201).json({ success: true, data: education });
  } catch (err) {
    next(err);
  }
};

const updateEducation = async (req, res, next) => {
  try {
    const education = await educationService.updateEducation(req.params.id, req.body);
    res.json({ success: true, data: education });
  } catch (err) {
    next(err);
  }
};

const deleteEducation = async (req, res, next) => {
  try {
    await educationService.deleteEducation(req.params.id);
    res.json({ success: true, message: 'Education removed' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getEducations, createEducation, updateEducation, deleteEducation };
