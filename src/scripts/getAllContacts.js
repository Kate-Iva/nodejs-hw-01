import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
};

console.log(await getAllContacts());