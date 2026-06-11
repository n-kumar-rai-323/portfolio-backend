const contactRepository = require('../repositories/contactRepository');

const listContacts = async (query) => {
  const options = {
    skip: (Number(query.page || 1) - 1) * (Number(query.limit || 10)),
    limit: Number(query.limit || 10),
  };
  return contactRepository.findContacts({}, options);
};

const createContact = async (payload) => contactRepository.createContact(payload);
const deleteContact = async (id) => contactRepository.deleteContact(id);
const markContactRead = async (id) => contactRepository.markContactRead(id);

module.exports = {
  listContacts,
  createContact,
  deleteContact,
  markContactRead,
};
