'use strict';
document.querySelector('#taskSubmit').onclick = function () {
  if (document.querySelector('#newTask input').value.length == 0) {
    alert('Please Enter a Task');
  } else {
    document.querySelector('#tasks').innerHTML += `
    <div class="task">
        <span id="taskName">
            ${document.querySelector('#newTask input').value}
        </span>
        <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>`;
    const currentTasks = document.querySelectorAll('.delete');
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    const tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle('completed');
      };
    }
    document.querySelector('#newTask input').value = '';
  }
};
