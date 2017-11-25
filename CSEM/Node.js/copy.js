'use strict';
const fs = require('fs');

//Entering the file path as first argument
//eg. node copy.js to /path/to/dummy.txt
let filePath = process.argv[2];

//create a readable stream from filePath
let readable = fs.createReadStream(filePath, 'utf-8');

//create a writeable stream from filePath that creates a new file with original filePath plus ending -copy
let writeable = fs.createWriteStream(filePath.replace('.', '-copy'));

//copying the content from filePath to filePath-copy
readable.on('end', () => {
    writeable.end();
});
readable.on('data', () => {
    writeable.write(data, 'utf-8');
});
writeable.on('finish', () => {
    console.log('Copy the file finished');
});

function errorOccured (error) {
    console.log(error);
}

writeable.on('error', errorOccured);
readable.on('error', errorOccured);

