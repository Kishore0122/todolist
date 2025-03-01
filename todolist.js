document.addEventListener("DOMContentLoaded", () => {
    displayTasks();
    document.getElementById("taskInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task === "") return alert("Task cannot be empty!");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (tasks.includes(task)) return alert("Task already exists! give any identification for this task");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
}
function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li>
                
                <span>${index + 1}. ${task}</span> 
                <button class="delete" onclick="deleteTask(${index})">❌</button>
            </li>
        `;
    });
}
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}