// readFile (callback)
// readFileSync
// fs.promisses.readFile (.then(callback))

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

const readSync = fs.readFileSync(filePath, 'utf-8');
console.log(readSync);

fs.promises
     .readFile(filePath, 'utf-8')
     .then((text) => {
         console.log(text);
});

