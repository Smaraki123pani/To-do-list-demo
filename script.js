const d= new Date();
const t= Date.now();
const today= new Date(t);
document.getElementById("date").innerHTML = today.toDateString();

const todoAdd = document.querySelector("#todo-add")
const todoInputAdd = document.querySelector("#todo-input-add")

const todoEdit = document.querySelector("#todo-edit")
const todoInputEdit = document.querySelector("#todo-input-edit")
const cancelBtn = document.querySelector("#cancel-btn")

const todoList = document.querySelector("#todo-list")
const todoFinish = document.querySelector(".todo-finish")

let oldInputValue;

function time(){
     let now= new Date();
     let hours= now.getHours();
     let minutes= now.getMinutes();
     let seconds= now.getSeconds();

if(hours<10)
    hours = "0" + hours;
if(minutes<10)
    minutes = "0" + minutes;
if(seconds<10)
    seconds = "0" + seconds;

document.getElementById("hour").innerHTML = hours + ":" + minutes + ":" + seconds;
}

  setTimeout('time()',500);

//   ..................ADD TASKS ...................   //

todoAdd.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputs= todoInputAdd.value;

    if(inputs)
    saveTodo(inputs);
});

const saveTodo=(text)=>{
    const todo=document.createElement("div");
    todo.classList.add("todo");

    const todoTitle= document.createElement("h3");
    todoTitle.innerText= text;
    todo.appendChild(todoTitle);

    const editBtn=document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerHTML= '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const removeBtn=document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.innerHTML= '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);
    todoInputAdd.value="";
    todoInputAdd.focus();
}

//   ..................EDIT/UPDATE TASKS ...................   //

document.addEventListener("click",(e) => {
    const targetE1 = e.target;
    const parentE1 = targetE1.closest("div");

    let todoTitle;

    if(parentE1 && parentE1.querySelector("h3"))
    todoTitle = parentE1.querySelector("h3").innerText;

    if(targetE1.classList.contains("remove"))
    parentE1.remove();

    if(targetE1.classList.contains("edit"))
    {
        toggleForms();
        todoInputEdit.value = todoTitle;
        oldInputValue = todoTitle;
    }
    
})

const toggleForms = () =>
{
    todoEdit.classList.toggle("hide");
    todoAdd.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

cancelBtn.addEventListener("click",(e) => {
    e.preventDefault();
    toggleForms();
})

todoEdit.addEventListener("submit",(e) => {
    e.preventDefault();

    const editInputValue = todoInputEdit.value;
    if(editInputValue)
    updateTodo(editInputValue)

    toggleForms();
})

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue)
        todoTitle.innerText = text;
    })
}


