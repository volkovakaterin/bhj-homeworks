const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
taskInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter" & taskInput.value !== "") {
        event.preventDefault();
        tasksList.insertAdjacentHTML("afterbegin", `<div class="task">
     <div class="task__title">
       ${taskInput.value}
     </div>
     <a href="#" class="task__remove">&times;</a>
     </div>`)
        const taskRemove = document.getElementsByClassName("task__remove");
        Array.from(taskRemove).forEach(element => {
            element.addEventListener('click', (event) => {
                event.currentTarget.parentNode.remove();
            })

        })
    }
})




