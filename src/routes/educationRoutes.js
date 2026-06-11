const express = require('express');
const requireAuth = require('../middleware/auth');
const { getEducations, createEducation, updateEducation, deleteEducation } = require('../controllers/educationController');
const { createEducationValidator } = require('../validators/educationValidator');

const router = express.Router();
router.get('/', getEducations);
router.post('/', requireAuth, createEducationValidator, createEducation);
router.put('/:id', requireAuth, updateEducation);
router.delete('/:id', requireAuth, deleteEducation);

module.exports = router;
