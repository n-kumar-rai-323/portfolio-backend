const { validationResult } = require('express-validator');
const authService = require('../services/authService');

const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 422;
      error.errors = errors.array();
      throw error;
    }

    const { email, password } = req.body;
    const result = await authService.loginAdmin(email, password);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
