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
    rl.question("Choose an option :",handleInput)
}

const handleInput = (option) => {
    if(option === 1){
        readline.question("enter the Task:", (task) =>{
            todos.push(task);
            console.log("Task added:" ,task);
            showMenu()
        })
     }
     else if(option === 2){
        console.log("\n your Todo Lists");
        todos.forEach((task,index) => {
            console.log(`${index+1}.${task}`);
        })
        showMenu();
        
        }
        else if(option === 3){
            console.log('good bye');
            rl.close();
        }
        else
        {
            console.log('invalid option .Please try again');
            showMenu();
        }
     }

showMenu();