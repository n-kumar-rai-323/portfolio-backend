const { body } = require('express-validator');

exports.createEducationValidator = [
  body('degree').notEmpty().withMessage('Degree is required'),
  body('institute').notEmpty().withMessage('Institute is required'),
  body('year').notEmpty().withMessage('Year is required'),
];
