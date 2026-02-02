document.addEventListener('DOMContentLoaded', () =>{
  const todoInput = document.getElementById("todo-input")
  const addTask = document.getElementById("add-task-btn")
  const todoList = document.getElementById("todo-list");

  let task = JSON.parse(localStorage.getItem("task")) || [];

  task.forEach((task) => renderTask(task));

  addTask.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if(taskText === "") return;

    const newTask = {
      id : Date.now(),
      text : taskText,
      completed : false
    }
    task.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = ""; //clear input
   // console.log(task);
  });

  function renderTask(tasks) {
    const li = document.createElement('li');
    li.setAttribute('data-id', tasks.id);

    if(tasks.completed) li.classList.add("completed");

    li.innerHTML = `
    <span> ${tasks.text} </span>
    <button>delete</button>
    `;
    li.addEventListener("click", (e) => {
      if(e.target.tagName === "BUTTON") return;
      tasks.completed = !tasks.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation(); //prevent toggle from firing
      task = task.filter(t => t.id !== tasks.id)
      li.remove();
      saveTask();
    })

    todoList.appendChild(li);

  }

  //adding local storage -> everytime it updates the whole local storage 
  function saveTask() {
    localStorage.setItem("task", JSON.stringify(task));
  }

});