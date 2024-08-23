import { createServer } from 'node:http';
import path from 'node:path';
import { promises as fs } from 'node:fs';

const pathToWorkDir = path.join(process.cwd());
const newFileName = 'new_file.txt';
console.log('pathToWorkDir: ', pathToWorkDir);
const newFilePath = path.join(pathToWorkDir, 'src', 'db', newFileName);
const startedFileData = 'Hello, this is a new file!';
const appendedFileData = '\nAddition file data';
const renamedFilePath = path.join(pathToWorkDir, 'src', 'db', 'newFile.txt');

const createFile = async (filePath, data) => {
    await fs.writeFile(filePath, data, 'utf8');
    console.log(`File created at ${filePath}`);
};

const appendToFile = async (filePath, data) => {
    await fs.appendFile(filePath, data);
    console.log(`Data appended to file ${filePath}`);
};

const moveFile = async (oldPath, newPath) => {

    await fs.rename(oldPath, newPath);
    console.log(`Moved or renamed file to ${newPath}`);

};

const removedFile = async (filePath) => {
    await fs.unlink(filePath);
    console.log(`Removed file from ${filePath}`);
};

const readDir = async (dirPath) => {
    const response = await fs.readdir(dirPath);
    console.log(`Readdir directory: ${response}`);
};

const accessDir = async (path) => {
    const response = await fs.access(path);
    console.log(`Access directory: ${response}`);
};

const main = async () => {
  await createFile(newFilePath, startedFileData);
  await appendToFile(newFilePath, appendedFileData);
  await moveFile(newFilePath, renamedFilePath);
  await readDir('src/db');
  await accessDir('src/db');

    const buffer = await fs.readFile(renamedFilePath);
    console.info('buffer: ', buffer.toString());
 
  // await removedFile(renamedFilePath);
};

main();

const buffer = await fs.readFile('src/db/new_file.txt');

console.log('buffer: ', buffer.toString());

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});