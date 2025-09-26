import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const todos = [] ;
 
const showMenu = () => {
    console.log("\n 1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
}



showMenu();