let tasks = [];

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority");
const taskContainer = document.getElementById("task-list");

function displayTasks() {
  taskContainer.innerHTML = "";
  for (const task of tasks) {
    const row = document.createElement("div");
    row.className = "task";

    const name = document.createElement("span");
    name.textContent = task.text;

    const priority = document.createElement("span");
    priority.textContent = task.priority;
    priority.className = "priority";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((t) => t !== task);
      displayTasks();
    });
    row.append(name, priority, deleteButton);
    taskContainer.append(row);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }

  tasks.push({
    text: text,
    priority: prioritySelect.value,
    status: false,
  });
  displayTasks();
  form.reset();
});
