const p = document.getElementById("text");
console.log(p);
const pclass = document.getElementsByClassName("text");
console.log(pclass); //returns HTML collection

const pq = document.querySelector(".text");
console.log(pq);

const qall = document.querySelectorAll(".text");
console.log(qall); //returns a node list - not an array or object, just can be indexed, not looped

const create = document.querySelector(".create");
const createinput = document.createElement("input");

create.append(createinput);
create.classList="divelement";

p.style.color = "red";
//p.remove();

//innertext, innerhtml, textcontent


//TO DO APP

const todos =[];
const todocontainer = document.getElementById("todo");
const inputtask = document.createElement("input");
inputtask.type = "text";
inputtask.placeholder = "Enter task...";

const btn = document.createElement("button");
btn.textContent="Add task";
todocontainer.append(inputtask);
todocontainer.append(btn);

function rendertask(){
    
}

function addtodo(){
    const task = inputtask.value;
    todos.unshift(task);
    inputtask.value ="";
    rendertask(task);
}
btn.addEventListener("click", addtodo);
