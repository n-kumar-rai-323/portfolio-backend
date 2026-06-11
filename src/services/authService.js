const jwt = require('jsonwebtoken');

const loginAdmin = async (email, password) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('Admin credentials are not configured');
  }

  if (email !== adminEmail || password !== adminPassword) {
    const error = new Error('Invalid credentials');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, {
    expiresIn: '8h',
  });

  return { token, email, role: 'admin' };
};

module.exports = {
  loginAdmin,
};
