const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskRemove = document.getElementsByClassName("task__remove");
const tasksAdd = document.getElementById('tasks__add');
const taskForm = document.getElementById('tasks__form');
function Add() {
  taskForm.onsubmit = (event) => event.preventDefault();
    if(taskInput.value.trim() !== ""){
      tasksList.insertAdjacentHTML("afterbegin", `<div class="task">
     <div class="task__title">
       ${taskInput.value}
     </div>
     <a href="#" class="task__remove">&times;</a>
     </div>`);  
    };
     taskRemove[0].addEventListener('click', (event) => {
     event.currentTarget.parentNode.remove();
     });
     taskInput.value = "";
}
tasksAdd.onclick = () =>{Add()};

taskInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        event.preventDefault();
        Add()
    }})

    
    








