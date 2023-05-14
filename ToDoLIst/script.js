
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-btn");
const todoList=document.querySelector(".todo-list");
const todoFilter=document.querySelector(".filter-todo")





todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
todoFilter.addEventListener("click",filterTodo)




function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const comletedButton=document.createElement('button');
    comletedButton.innerHTML='<i class="fas fa-check"></i>';
    comletedButton.classList.add("complete-btn");
    todoDiv.appendChild(comletedButton);

    const deleteButton=document.createElement('button');
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    todoInput.value="";
}
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
function filterTodo(e){
    const  todos= todoList.children;
    todos.forEach(function(todo){
        console.log(todos);
        switch(e.target.value){
            case "All":
                todo.style.display="flex";
                break;
            case "Completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "Uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display="flex";
                    }else{
                        todo.style.display="none";
                    }
                break;
        }
    });
}

        
    


