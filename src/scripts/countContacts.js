import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');

    return JSON.parse(data)?.length;
};

console.log(await countContacts());