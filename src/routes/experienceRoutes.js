const express = require('express');
const requireAuth = require('../middleware/auth');
const { getExperiences, createExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');
const { createExperienceValidator } = require('../validators/experienceValidator');

const router = express.Router();
router.get('/', getExperiences);
router.post('/', requireAuth, createExperienceValidator, createExperience);
router.put('/:id', requireAuth, updateExperience);
router.delete('/:id', requireAuth, deleteExperience);

module.exports = router;
