const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskRemove = document.getElementsByClassName("task__remove");
const tasksAdd = document.getElementById('tasks__add');
function Add() {
    if(taskInput.value.trim() !== ""){
      tasksList.insertAdjacentHTML("afterbegin", `<div class="task">
     <div class="task__title">
       ${taskInput.value}
     </div>
     <a href="#" class="task__remove">&times;</a>
     </div>`);  
    }
     Array.from(taskRemove).forEach(element => {
    element.addEventListener('click', (event) => {
        event.currentTarget.parentNode.remove();
            })
})
}
console.log(tasksAdd);
tasksAdd.onclick = () =>{Add()};

taskInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        event.preventDefault();
        Add()
    }})

    
    








