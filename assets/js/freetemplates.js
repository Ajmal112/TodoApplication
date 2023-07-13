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


//profile pic name show

let todoRegister = JSON.parse(localStorage.getItem("todoRegister"));
console.log(todoRegister);

let todoLogin = JSON.parse(localStorage.getItem("todoLogin"));
console.log(todoLogin);

let findUser = todoRegister.find(user => user.email == todoLogin);
console.log(findUser);

document.getElementById("profile_pic").src = findUser['profile_pic'];
document.getElementById("profile_name").innerText = findUser['name'];



//add task div open
let addtask = document.getElementById("addtask");
addtask.addEventListener("click",(event) => {
event.preventDefault();

  document.getElementById("popupOverlay").style.display= "block";
})



//cancel task
let closetask = document.getElementById("closePopup");
closetask.addEventListener("click",(event) => {
event.preventDefault();

  document.getElementById("popupOverlay").style.display= "none";
})


//userobj array



//add task
let addnewtask = document.getElementById("form");
addnewtask.addEventListener("submit",(event) => {
event.preventDefault();

   if(JSON.parse(localStorage.getItem("freetemplates")) !== null ) {

    freetemplates = JSON.parse(localStorage.getItem("freetemplates"));


    let taskname = document.getElementById("taskname").value;
    let taskdetails = document.getElementById("taskdetails").value;
    let taskcategory = document.getElementById("taskcategory").value;
    let taskdue = document.getElementById("taskdue").value;
    let taskassignee = document.getElementById("taskassignee").value;
    let taskstatus = document.getElementById("taskstatus").value;
    let projectname = document.getElementById("projectname").value;
    let taskpriority = document.getElementById("taskpriority").value;
    let tasktags = document.getElementById("tasktags").value;
    let todoID = Date.now();
    let dateposted = moment().format('MMMM Do YYYY, h:mm:ss a');
  
    let todoObj = {
      taskname,
      taskdetails,
      taskcategory,
      taskdue,
      taskassignee,
      taskstatus,
      projectname,
      taskpriority,
      tasktags,
      todoID,
      dateposted
    };
  
    console.log(todoObj);

    let taskdues = document.getElementById("taskdue").value;
    let selectedDate = new Date(taskdues);
    let newDate = new Date();
    

  if( selectedDate >= newDate ){
    
    freetemplates.push(todoObj);


    // Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.



 
    localStorage.setItem("freetemplates",JSON.stringify(freetemplates));
  
    alert("Task Added Successfully");

    // location.reload();

  } else {
    alert("Task DueDate Must be Greater than or Equal to Today's Date");
  }

   } else {

    let freetemplates = [];
   
  let taskname = document.getElementById("taskname").value;
  let taskdetails = document.getElementById("taskdetails").value;
  let taskcategory = document.getElementById("taskcategory").value;
  let taskdue = document.getElementById("taskdue").value;
  let taskassignee = document.getElementById("taskassignee").value;
  let taskstatus = document.getElementById("taskstatus").value;
  let projectname = document.getElementById("projectname").value;
  let taskpriority = document.getElementById("taskpriority").value;
  let tasktags = document.getElementById("tasktags").value;
  let todoID = Date.now();
  let dateposted = moment().format('MMMM Do YYYY, h:mm:ss a');


  let todoObj = {
    taskname,
    taskdetails,
    taskcategory,
    taskdue,
    taskassignee,
    taskstatus,
    projectname,
    taskpriority,
    tasktags,
    todoID,
    dateposted
  };

  console.log(todoObj);

  //set this array in userobj
  freetemplates.push(todoObj);

  localStorage.setItem("freetemplates",JSON.stringify(freetemplates));

  alert("Task Added Successfully");

  location.reload();


   }
  
})


//for loop todos create
console.log(freetemplates);


// let tododiv;

// //reverse todos recent todos will come first
// for(let i=0; i<findUser["mytodos"].length; i++) {

//  tododiv = document.createElement("a");
//  tododiv.setAttribute("class","tododiv");
//  tododiv.setAttribute("id",`tododiv-${i}`);
//  tododiv.setAttribute("href","pages/tododetails.html?id=" + findUser["mytodos"][i]["todoID"]);
//  let splitname = findUser["mytodos"][i]["taskname"];
//  let splitdesc = findUser["mytodos"][i]["taskdetails"];
//  let splittime = findUser["mytodos"][i]["taskdue"];

//  //color priority
//  tododiv.innerHTML = `    <span id="taskstatus1">${findUser["mytodos"][i]["taskstatus"]}</span>
//  <div class="todoinnerdiv">
//     <p id="taskname1" >${splitname.slice(0,25)}.....</p>
//     <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
//     <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytodos"][i]["projectname"]}</p>
//    <div id="taskdue-assign1">
//   <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
//   <a id="taskassignee1" href="mailto:${findUser["mytodos"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
// </div> 
//     <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytodos"][i]["taskpriority"]}</p>
//  </div>`;
  
//  document.querySelector("#todo-container").append(tododiv);

// }

//logut button event
let logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("submit",(event) => {
event.preventDefault();

let msg = confirm("Are you sure You want to LogOut ?");

if(msg === true){

  localStorage.removeItem("todoLogin");

  let newWindow = window.open("../index.html","noopener,noreferrer");
  window.close();
  newWindow.focus();
}
})



//searchbar query event
let searchbar = document.getElementById("search");
searchbar.addEventListener("input",(event)=> {
event.preventDefault();

let cards = document.getElementsByClassName("tododiv");

for(let i=0; i<cards.length;i++){
  let element = cards[i];

  if(element.innerText.toLowerCase().includes(searchbar.value.toLowerCase())){
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
})

// //add colors according to the priority
// for (let i = 0; i < findUser["mytodos"].length; i++) {
//     const todo = findUser["mytodos"][i];
//     const priority = todo.taskpriority;
  
//     console.log(priority);
  
//     const element = document.getElementById(`bx-circle-${i}`);
//     const tododiv = document.getElementById(`tododiv-${i}`);
  
//   if (priority === "High") {
//     element.classList.add("red");
//     tododiv.classList.add("lightred");
//   } else if (priority === "Medium") {
//     element.classList.add("yellow");
//     tododiv.classList.add("lightyellow");
//   } else if (priority === "Low") {
//     element.classList.add("green");
//     tododiv.classList.add("lightgreen");
//   }
  
//   }
  