const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);


// const fileName1 = __dirname;
// fs.promises.readdir(fileName1)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));


fs.promises
    .readFileFile(filePath, "This is the initial Data", "utf-8")

    .then((data) => console.log(data))
    .catch((err) => { console.error("error reading file:", err);
    });











// const file = __dirname;
// fs.promises
//      .readdir(file)
//      .then((data) => console.log(data))
//      .catch((err) => console.error(err));