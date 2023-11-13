const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "" ) {
        alert("Write something!!")
    } else {
        const li = document.createElement("li")
        li.innerHTML = `
            <span>${inputBox.value}</span>
            <span class="action-icons">
                <i class="fas fa-edit" onclick="editTask(this)"></i>
                <i class="fas fa-trash-alt" onclick="deleteTask(this)"></i>
            </span>
        `;
        listContainer.appendChild(li)
    }
    inputBox.value = ""
}