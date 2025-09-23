const fs = require('fs');
const path = require('path');


// *-------------------------------------------------------------------------------------*
//* fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.
//! syntax: fs.writeFileSync(filePath, data, options);
//? filePath: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Includes encoding ('utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*
// utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols, and emojis.

const fileName = "test.txt";
const filepath = path.join(__dirname, fileName);
console.log(__dirname);


const writeFile = fs.writeFileSync(filepath,"this is the intial data","utf-8");
console.log(writeFile); // undefined


