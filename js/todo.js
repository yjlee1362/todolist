const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const toDos_key = "toDos";

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
};

function deleteTodo(event) {
    const li = event.target.parentElement; //event(여기서는 click)에서 타겟의 부모 요소

    li.remove();// 요소 지우는 함수
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.style.color = "red";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

function handleToDoSubit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { text: newTodo, id: Date.now(), };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
};

toDoForm.addEventListener("submit", handleToDoSubit);

const savedToDos = localStorage.getItem(toDos_key);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    //toDos 배열은 브라우저 시작시 []로 null이기 때문에 로컬스토리지의 내용들을 읽어옴
    parsedToDos.forEach(paintToDo);
};
