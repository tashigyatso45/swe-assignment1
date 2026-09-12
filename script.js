
let tasks = [];

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority");
const taskContainer = document.getElementById("task-list");

// function that handles the tasks when submitted and displays them in the task list
function displayTasks() {
  taskContainer.innerHTML = "";
  for (const task of tasks) {
    const row = document.createElement("ul");
    row.className = "task";

    const name = document.createElement("li");
    name.textContent = `name: ${task.text}`;

    const priority = document.createElement("li");
    priority.textContent = `priority: ${task.priority}`;
    priority.className = "priority";

    // creates a delete button for each task and adds an event
    // listener to remove the task from the list when clicked
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    //filters all the task except the one that is being deleted and updates the display
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((t) => t !== task);
      displayTasks();
    });
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    //checks to see if the task is done or not and updates the display accordingly
    checkbox.addEventListener("change", () => {
      task.done = !task.done;
      displayTasks();
    });

    if (task.done) {
      row.classList.add("done");
    }
    row.append(name, priority, checkbox, deleteButton);
    taskContainer.append(row);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }
  // adds the task to the tasks array and displays it in the task list
  tasks.push({
    text: text,
    priority: prioritySelect.value,
    done: false,
  });

  displayTasks();
  form.reset();
});
