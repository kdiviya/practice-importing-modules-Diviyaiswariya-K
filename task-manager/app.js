//import the modules taskManager.js, fileHandler.js and path(built-in module)
const taskModule = require('./taskManager.js');
const fileModule = require('./fileHandler.js');
const path = require('path');

//create an empty array to store the tasks.
let tasks = [];

//create a tasks.json file with the tasks like ["Create a new repository","Name the repository practice_Modules","Clone the repository on your local"]
console.log(fileModule.saveTasks('tasks.json',["Create a new repository", "Name the repository practice_Modules", "Clone the repository on your local"]));

//Display the contents in the tasks.json file.
let tasksObj = fileModule.loadTasks('tasks.json');
console.log(tasksObj);
console.log("\n");

//Add a news tasks like "Start working on the code", "Push the code to the repository" in the array.
console.log(taskModule.addTask(tasks, "Start working on the code"));
console.log(taskModule.addTask(tasks, "Push the code to the repository"));


//Display the list of tasks stored in thne array.
let listTask = taskModule.listTasks(tasks);

//update the tasks.json file with the newly added task.
console.log(fileModule.saveTasks('tasks.json', tasks));

tasksObj = fileModule.loadTasks('tasks.json');
console.log(tasksObj);
console.log("\n");

/*Output:
   The file tasks.json is updated.
The contents are:
[
  'Create a new repository',
  'Name the repository practice_Modules',
  'Clone the repository on your local'
]


The tasks are added to the list.
[ 'Start working on the code' ]
The tasks are added to the list.
[ 'Start working on the code', 'Push the code to the repository' ]
Task-List:
1. Start working on the code
2. Push the code to the repository
The file tasks.json is updated.
The contents are:
[ 'Start working on the code', 'Push the code to the repository' ]
*/
