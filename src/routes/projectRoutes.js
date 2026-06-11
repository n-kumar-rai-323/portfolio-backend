const express = require('express');
const requireAuth = require('../middleware/auth');
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const { createProjectValidator } = require('../validators/projectValidator');

const router = express.Router();
router.get('/', getProjects);
router.post('/', requireAuth, createProjectValidator, createProject);
router.put('/:id', requireAuth, updateProject);
router.delete('/:id', requireAuth, deleteProject);

module.exports = router;
