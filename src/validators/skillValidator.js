const { body } = require('express-validator');

exports.createSkillValidator = [
  body('name').notEmpty().withMessage('Skill name is required'),
  body('category').notEmpty().withMessage('Skill category is required'),
  body('level').isInt({ min: 0, max: 100 }).withMessage('Level must be a number between 0 and 100'),
];
