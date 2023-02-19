/**
 * @description This function adds a new task to the todo list when the form is submitted and the input is not empty.
 *  It also adds a delete button to each task.
 * When the delete button is clicked, the task is removed from the todo list.
 * @param {HTMLFormElement} form - The form element
 */
const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector("#todo-list");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (task.length > 0) {
    const li = document.createElement("li");
    li.innerText = task;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    input.value = "";
  }
});
