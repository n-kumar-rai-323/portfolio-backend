const { body } = require('express-validator');

exports.createProjectValidator = [
  body('title').notEmpty().withMessage('Project title is required'),
  body('description').notEmpty().withMessage('Project description is required'),
  body('technologies').isArray().withMessage('Technologies must be an array'),
];
