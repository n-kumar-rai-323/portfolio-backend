const { validationResult } = require('express-validator');
const projectService = require('../services/projectService');

const getProjects = async (req, res, next) => {
  try {
    const data = await projectService.listProjects(req.query);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const createProject = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 422;
      error.errors = errors.array();
      throw error;
    }

    const project = await projectService.createProject(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    await projectService.deleteProject(req.params.id);
    res.json({ success: true, message: 'Project removed' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
