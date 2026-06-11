const express = require('express');
const requireAuth = require('../middleware/auth');
const { getSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillController');
const { createSkillValidator } = require('../validators/skillValidator');

const router = express.Router();
router.get('/', getSkills);
router.post('/', requireAuth, createSkillValidator, createSkill);
router.put('/:id', requireAuth, updateSkill);
router.delete('/:id', requireAuth, deleteSkill);

module.exports = router;
