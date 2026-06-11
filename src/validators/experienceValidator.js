const { body } = require('express-validator');

exports.createExperienceValidator = [
  body('company').notEmpty().withMessage('Company is required'),
  body('position').notEmpty().withMessage('Position is required'),
  body('duration').notEmpty().withMessage('Duration is required'),
  body('responsibilities').isArray().withMessage('Responsibilities must be an array'),
];
