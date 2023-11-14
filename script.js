const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let tasks = [];

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  renderTasks();
  inputBox.value= "";
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function editTask(id) {
 
  const taskToEdit = tasks.find((task) => task.id === id);

  
  if (taskToEdit) {
  
    inputBox.value = taskToEdit.text;

   
    tasks = tasks.filter((task) => task.id !== id);

  
    renderTasks();
  }
}



function renderTasks() {
  listContainer.innerHTML = "";

  tasks.map((task) => {
    const li = document.createElement("li");
     li.setAttribute("data-task-id", task.id);
    li.innerHTML = `
    <span class="task-text">${task.text}</span>
    <span class="action-icons">
                <i class="fas fa-edit" onclick="editTask(${task.id})"></i>
                <i class="fas fa-trash-alt" onclick="deleteTask(${task.id})"></i>
             </span>
    
    `;
    listContainer.appendChild(li);
  });
}



