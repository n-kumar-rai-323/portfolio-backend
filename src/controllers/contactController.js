const { validationResult } = require('express-validator');
const contactService = require('../services/contactService');

const createContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 422;
      error.errors = errors.array();
      throw error;
    }
    const contact = await contactService.createContact(req.body);
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

const getContacts = async (req, res, next) => {
  try {
    const data = await contactService.listContacts(req.query);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    await contactService.deleteContact(req.params.id);
    res.json({ success: true, message: 'Message deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { createContact, getContacts, deleteContact };
