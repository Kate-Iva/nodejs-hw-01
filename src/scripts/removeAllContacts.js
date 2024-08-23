import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const removeAllContacts = async () => {
 
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');

    console.log(`All contacts have been removed`);

};

removeAllContacts();