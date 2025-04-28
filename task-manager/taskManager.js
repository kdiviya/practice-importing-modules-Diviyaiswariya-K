//Add a new task to the array tasks.

function addTask(tasks,task) {
    tasks = task;
    console.log(`The tasks are added to the list.`);
    return tasks;

}

//List all the task in the array
function listTasks(tasks){ 

    console.log("Task-List:");   
    for(let i = 0; i < tasks.length; i++) {
        console.log(i+1 +". " +tasks[i]);
    }

}

////export the function addTask, listTasks.
module.exports = {addTask, listTasks};