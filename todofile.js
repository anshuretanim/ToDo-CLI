import fs from "fs";
import path from "path";
import {fileURLToPath} from "url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "ToDo.txt";
const filePath = path.join(__dirname, fileName);

const writeHere = (ToDoData) => {
fs.appendFile(filePath, ToDoData+"\n", "utf-8", (err)=>{
    if(err){
        console.error(err);
    }
});
};


export default writeHere;

