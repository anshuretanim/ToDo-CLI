import readline from "readline";
import writeHere from "./todofile.js";

const rl = readline.createInterface({ //node creates a new object.
    //the new object is stored in rl.
    //now, rl has methods like rl.question(), rl.close(), rl.on()
    input: process.stdin, //keyboard input
    output: process.stdout //terminal output
});

const todos = [];

const showMenu = () => {
    console.log("--ToDo List--");
    console.log("1: Add a task");
    console.log("2: View Task");
    console.log("3: Exit");
    rl.question("Choose an option: ", handleInput);
}

const handleInput = (option) => {
    if(option==="1"){
        rl.question("Enter task: ", (task)=>{
            todos.push(task);
            writeHere(task);
            console.log("\n");
            console.log("Task added: ", task);
            showMenu();
        })}
    else if(option==="2"){
        if(todos.length===0){
            console.log("No tasks.\n");
        }else{
        console.log("\n Your ToDo List is:\n");
        todos.forEach((task, index) => {
            console.log(`${index+1}. ${task}\n`);
})}
            showMenu();
    } else if(option==="3"){
        console.log("Thank you for using the code.");
        rl.close();
    }else{
        console.log("Invalid option. Please try again with a valid input number.");
        showMenu();
    }        

    
}

showMenu();
