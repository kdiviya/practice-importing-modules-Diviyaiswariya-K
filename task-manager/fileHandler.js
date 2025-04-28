 //import "fs" bulit in module
 const fileSystem = require('fs');

//create tasks.json and add/update the tasks in the file
 function saveTasks(filePath, tasks) { 

    //If the file tasks.json is exist, it update the tasks in the file
    if (fileSystem.existsSync(filePath)){
        fileSystem.writeFileSync(filePath, JSON.stringify(tasks)); //converts the tasks into string and save it into tasks.json
        return `The file ${filePath} is updated.`;
    }

 //If the file doesn't exist, it will create a new file and add the contents.
    else {
        fileSystem.writeFileSync(filePath, JSON.stringify(tasks));
        return `The file ${filePath} is created.`;
    }

}
 
//Read the tasks.json file and display the tasks
function loadTasks(filePath){

    //If tasks.json file exist, reads the file, parses and display the tasks array. 
    if (fileSystem.existsSync(filePath)) {
        const readFile = fileSystem.readFileSync(filePath, 'utf-8');
        const TaskObj = JSON.parse(readFile);
        console.log("The contents are:");
        return TaskObj;
    }

    //If tasks.json file not exist, it will return an empty array.
    else {
        console.log(`The file does not exist`)
        return [];
    }
}

//export the function saveTasks, loadTasks.
module.exports = {saveTasks, loadTasks};