const contacts = require("./contacts");
// const yargs = require('yargs');
// const { hideBin } = require("yargs/helpers");

const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      return console.table(listContacts);
    case "get":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);
    case "add":
      const addedContact = await contacts.addContact(name, email, phone);
      return console.log(addedContact);
    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
