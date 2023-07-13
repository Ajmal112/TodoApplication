let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


let url = window.location.search;
let urlParams = new URLSearchParams(url);
let todoID = urlParams.get("id");
console.log(todoID);

let todoRegister = JSON.parse(localStorage.getItem("todoRegister"));
console.log(todoRegister);

let todoLogin = JSON.parse(localStorage.getItem("todoLogin"));
console.log(todoLogin);

let findUser = todoRegister.find(user => user.email == todoLogin);
console.log(findUser);

let findObj = findUser["mytodos"].find((todo) => todo.todoID  == todoID);
console.log(findObj);


document.getElementById("taskname").value = findObj.taskname;
document.getElementById("taskdetails").innerText = findObj.taskdetails;
document.getElementById("taskcategory").value = findObj.taskcategory;
document.getElementById("taskdue").value = findObj.taskdue;
document.getElementById("taskassignee").value = findObj.taskassignee;
document.getElementById("taskstatus").value = findObj.taskstatus;
document.getElementById("projectname").value = findObj.projectname;
document.getElementById("taskpriority").value = findObj.taskpriority;
document.getElementById("tasktags").value = findObj.tasktags;
document.getElementById("todoID").value = findObj.todoID;




let form = document.getElementById("addtask");
form.addEventListener("click",(event) => {
event.preventDefault();

let taskname = document.getElementById("taskname").value;
let taskdetails = document.getElementById("taskdetails").value;
let taskcategory = document.getElementById("taskcategory").value;
let taskdue = document.getElementById("taskdue").value;
let taskassignee = document.getElementById("taskassignee").value;
let taskstatus = document.getElementById("taskstatus").value;
let projectname = document.getElementById("projectname").value;
let taskpriority = document.getElementById("taskpriority").value;
let tasktags = document.getElementById("tasktags").value;
let todoID = document.getElementById("todoID").value;

let newObj = {
    taskname,
    taskdetails,
    taskcategory,
    taskdue,
    taskassignee,
    taskstatus,
    projectname,
    taskpriority,
    tasktags,
    todoID
};


let assignObj = Object.assign(findObj,newObj);

let index = findUser["mytodos"].indexOf(findObj);
console.log(index);


findUser["mytodos"][index] = assignObj;


localStorage.setItem("todoRegister",JSON.stringify(todoRegister));

document.getElementById("addtask").innerText = "Task Edited Successfully";

alert("Task Successfully Edited");

window.location.href = "mytodo.html";

})


let deletetask = document.getElementById("deletetask");
deletetask.addEventListener("click",(event) => {
event.preventDefault();

let index = findUser["mytodos"].indexOf(findObj);
console.log(index);

let msg = confirm("Are you sure You want to Delete this task ?");

if(msg === true) {

  findUser["mytodos"].splice(index,1);

 localStorage.setItem("todoRegister",JSON.stringify(todoRegister));

 alert("Task Successfully Deleted");

 window.location.href = "index2.html";

}


});
