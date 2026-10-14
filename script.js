
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // Complete task button
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "done-btn";

    doneButton.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete task button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
    };

    // Group the action buttons
    const actions = document.createElement("div");
    actions.className = "task-actions";
    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);

    // Add everything to the task list
    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    input.value = "";
    input.focus();
}

// Allow Enter key to add a task
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
