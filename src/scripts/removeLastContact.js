import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const removeLastContact = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    contacts.pop();
    
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Last contact has been removed');
};

removeLastContact();