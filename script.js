let taskList = document.getElementById("taskList");

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">${task}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(button){
    button.parentElement.remove();
}

function toggleTask(element){
    element.classList.toggle("completed");
}