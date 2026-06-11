const Contact = require('../models/Contact');

const findContacts = async (filter, options) => {
  const total = await Contact.countDocuments(filter);
  const contacts = await Contact.find(filter)
    .sort({ createdAt: -1 })
    .skip(options.skip)
    .limit(options.limit);
  return { total, contacts };
};

const createContact = async (payload) => Contact.create(payload);
const deleteContact = async (id) => Contact.findByIdAndDelete(id);
const markContactRead = async (id) => Contact.findByIdAndUpdate(id, { read: true }, { new: true });

module.exports = {
  findContacts,
  createContact,
  deleteContact,
  markContactRead,
};
