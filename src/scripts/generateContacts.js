import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (count) => {
    const updatedContacts = [...contacts, ...newContacts];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log(`${count} new contacts have been added`);
};

generateContacts(5);