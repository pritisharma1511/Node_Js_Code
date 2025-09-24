const fs = require("fs/promises");
const path = require("path");

const fileName = "fsAsyncAwait.txt";
const filePath = path.join(__dirname, fileName);
const filePath1 = __dirname;

// fs.promises
//     .readdir(filePath1)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// const readFolder = async () => {
//     try {
//         const res = await fs.promises.readdir(filePath1);  
//        console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// };
// readFolder();

const  writeFileExample = async () => {
    try {
        await fs.writeFile(filePath, "this is the initial data", "utf-8");
        console.log("File created successfully!");
    } catch (err) {
        console.log(err);
    }   
};
writeFileExample();
