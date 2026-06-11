const express = require('express');
const requireAuth = require('../middleware/auth');
const { createContact, getContacts, deleteContact } = require('../controllers/contactController');
const { createContactValidator } = require('../validators/contactValidator');

const router = express.Router();
router.post('/', createContactValidator, createContact);
router.get('/', requireAuth, getContacts);
router.delete('/:id', requireAuth, deleteContact);

module.exports = router;
