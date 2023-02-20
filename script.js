/**
 * @description This function adds a new task to the todo list when the form is submitted and the input is not empty.
 *  It also adds a delete button to each task.
 * When the delete button is clicked, the task is removed from the todo list.
 * @param {HTMLFormElement} form - The form element
 */
// form is the form element
const form = document.querySelector("form");
// input is the input element
const input = document.querySelector("input");
// todoList is the ul element
const todoList = document.querySelector("#todo-list");
// Add event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting and refreshing the page when the form is submitted
  event.preventDefault();
  // Get the value of the input
  const task = input.value.trim();
  // If the input is not empty (i.e. the length of the input is greater than 0)
  if (task.length > 0) {
    // Create a new li element
    const li = document.createElement("li");
    // Set the inner text of the li element to the value of the input
    li.innerText = task;
    // Create a new button element
    const deleteBtn = document.createElement("button");
    // Set the inner text of the button to "Delete"
    deleteBtn.innerText = "Delete";
    // Add a class to the button
    deleteBtn.className = "delete-btn";
    // Add an event listener to the button
    deleteBtn.addEventListener("click", (event) => {
      // Remove the li element from the ul element
      event.target.parentNode.remove();
    });
    // Append the button to the li element
    li.appendChild(deleteBtn);
    // Append the li element to the ul element
    todoList.appendChild(li);
    // Clear the input
    input.value = "";
  }
});
