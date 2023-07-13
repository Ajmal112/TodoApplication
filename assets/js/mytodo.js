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

   if(JSON.parse(localStorage.getItem("todoArray")) !== null ) {

    todoArray = JSON.parse(localStorage.getItem("todoArray"));


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
      todoID
    };
  
    console.log(todoObj);

    let taskdues = document.getElementById("taskdue").value;
    let selectedDate = new Date(taskdues);
    let newDate = new Date();
    

  if( selectedDate >= newDate ){
    
    findUser["mytodos"].push(todoObj);
  
    localStorage.setItem("todoRegister",JSON.stringify(todoRegister));
  
    alert("Task Added Successfully");

    location.reload();

  } else {
    alert("Task DueDate Must be Greater than or Equal to Today's Date");
  }

   } else {

   
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
  };

  console.log(todoObj);

  //set this array in userobj
  findUser["mytodos"].push(todoObj);

  localStorage.setItem("todoRegister",JSON.stringify(todoRegister));

  alert("Task Added Successfully");

  location.reload();


   }
  
})




//emoji api call
// fetch("https://emoji-api.com/emojis?access_key=a63d8810c315f697d08ac9c241a0044f26203457")
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.error(err))



//for loop todos create
console.log(findUser["mytodos"]);


let tododiv;

    tododivcompleted = document.createElement("a");
    tododivcompleted.setAttribute("class","tododiv");
    tododivcompleted.setAttribute("id","tododiv1");
     tododivcompleted.innerHTML = `    <span id="taskstatus1" style="background-color:#8BC34A; color:black;">Completed</span>
     <div id="todoinnerdiv1" class="todoinnerdivs">
     <p id="noresultsfound-p" style="display:none;">Completed Tasks <br>Section Is Empty</p>
     </div>`;
    document.querySelector("#todo-container").append(tododivcompleted);

    //show no results found in div tags
    document.addEventListener("DOMContentLoaded", function() {
    let todoinnerdiv1 = document.getElementById("todoinnerdiv1");
    let divCount = todoinnerdiv1.querySelectorAll("a").length;
    console.log(divCount);
    if(divCount === 0){
        document.getElementById("noresultsfound-p").style.display = "block";
    } else {
        document.getElementById("noresultsfound-p").style.display = "nones";
    }
});

    tododivworking = document.createElement("a");
    tododivworking.setAttribute("class","tododiv");
    tododivworking.setAttribute("id","tododiv2");
     tododivworking.innerHTML = `    <span id="taskstatus1" style="background-color:#FFC107; color:black;" >Currently Working</span>
     <div id="todoinnerdiv2" class="todoinnerdivs">
     <p id="noresultsfound2-p" style="display:none;">Currently Working Tasks <br>Section Is Empty</p>
     </div>`;
    document.querySelector("#todo-container").append(tododivworking);


        //show no results found in div tags
        document.addEventListener("DOMContentLoaded", function() {
            let todoinnerdiv2 = document.getElementById("todoinnerdiv2");
            let divCount = todoinnerdiv2.querySelectorAll("a").length;
            console.log(divCount);
            if(divCount === 0){
                document.getElementById("noresultsfound2-p").style.display = "block";
            } else {
                document.getElementById("noresultsfound2-p").style.display = "nones";
            }
        });

    tododivnotcompleted = document.createElement("a");
    tododivnotcompleted.setAttribute("class","tododiv");
    tododivnotcompleted.setAttribute("id","tododiv3");
     tododivnotcompleted.innerHTML = `    <span id="taskstatus1" style="background-color:#F44336; color:white;" >Not Completed (Incomplete)</span>
     <div id="todoinnerdiv3" class="todoinnerdivs">
     <p id="noresultsfound3-p" style="display:none;">Not Completed (Incomplete)  <br>Tasks Section Is Empty</p>
     </div>`;
    document.querySelector("#todo-container").append(tododivnotcompleted);


            //show no results found in div tags
            document.addEventListener("DOMContentLoaded", function() {
                let todoinnerdiv3 = document.getElementById("todoinnerdiv3");
                let divCount = todoinnerdiv3.querySelectorAll("a").length;
                console.log(divCount);
                if(divCount === 0){
                    document.getElementById("noresultsfound3-p").style.display = "block";
                } else {
                    document.getElementById("noresultsfound3-p").style.display = "nones";
                }
            });

    tododivnotyetstarted = document.createElement("a");
    tododivnotyetstarted.setAttribute("class","tododiv");
    tododivnotyetstarted.setAttribute("id","tododiv4");
     tododivnotyetstarted.innerHTML = `    <span id="taskstatus1" style="background-color:#9E9E9E; color:white;" >Not Yet Started</span>
     <div id="todoinnerdiv4" class="todoinnerdivs">
     <p id="noresultsfound4-p" style="display:none;">Not Yet Started Tasks <br>Section Is Empty</p>
     </div>`;
    document.querySelector("#todo-container").append(tododivnotyetstarted);


            //show no results found in div tags
            document.addEventListener("DOMContentLoaded", function() {
                let todoinnerdiv4 = document.getElementById("todoinnerdiv4");
                let divCount = todoinnerdiv4.querySelectorAll("a").length;
                console.log(divCount);
                if(divCount === 0){
                    document.getElementById("noresultsfound4-p").style.display = "block";
                } else {
                    document.getElementById("noresultsfound4-p").style.display = "nones";
                }
            });


//reverse todos recent todos will come first
for(let i=findUser["mytodos"].length-1; i>=0; i--) {

 tododiv = document.createElement("a");
 tododiv.setAttribute("class","todoinnerdiv");
 tododiv.setAttribute("draggable","true"); 
 tododiv.setAttribute("ondragstart","drag(event)");
 tododiv.setAttribute("class","todo-item");
 tododiv.setAttribute("href","../pages/tododetails.html?id=" + findUser["mytodos"][i]["todoID"]);
 let splitname = findUser["mytodos"][i]["taskname"];
 let splitdesc = findUser["mytodos"][i]["taskdetails"];
 let splittime = findUser["mytodos"][i]["taskdue"];
 

 //color priority
 tododiv.innerHTML = ` 
 <div class="task-div">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytodos"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytodos"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" class="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytodos"][i]["taskpriority"]}</p>
  </div>`;

 if(findUser["mytodos"][i]["taskstatus"] === "Completed" ) {
 document.querySelector("#todoinnerdiv1").append(tododiv);

 } else if (findUser["mytodos"][i]["taskstatus"] === "Currently Working" ){
    document.querySelector("#todoinnerdiv2").append(tododiv); 
 } else if (findUser["mytodos"][i]["taskstatus"] === "Not Completed (Incomplete)" ){
    document.querySelector("#todoinnerdiv3").append(tododiv); 
 } else {
    document.querySelector("#todoinnerdiv4").append(tododiv);
 }

}

//add colors according to the priority
for (let i = 0; i < findUser["mytodos"].length; i++) {
    const todo = findUser["mytodos"][i];
    const priority = todo.taskpriority;

    console.log(priority);
  
    const element = document.getElementById(`bx-circle-${i}`);

  if (priority === "High") {
    element.classList.add("red");
  } else if (priority === "Medium") {
    element.classList.add("yellow");
  } else if (priority === "Low") {
    element.classList.add("green");
  }

  }

  
  
  
  
  


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





//draggable div's
 // Get the list items
 const todoItems = document.querySelectorAll('.todo-item');

 // Add event listeners for drag events
 todoItems.forEach(item => {
   item.addEventListener('dragstart', dragStart);
   item.addEventListener('dragover', dragOver);
   item.addEventListener('dragenter', dragEnter);
   item.addEventListener('dragleave', dragLeave);
   item.addEventListener('drop', drop);
   item.addEventListener('dragend', dragEnd);
 });
 
 // Store the dragged item
 let draggedItem = null;
 
 // Drag start event handler
 function dragStart(event) {
   draggedItem = this;
   
   setTimeout(() => {
     this.style.opacity = '0.5';
   }, 0);
 }
 
 // Drag over event handler
 function dragOver(event) {
   event.preventDefault();
 }
 
 // Drag enter event handler
 function dragEnter(event) {
   event.preventDefault();
   this.classList.add('drag-over');
 }
 
 // Drag leave event handler
 function dragLeave() {
   this.classList.remove('drag-over');
 }

 function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log(event.target.id);
 }
 
 // Drop event handler
 function drop(event) {
   this.classList.remove('drag-over');
   this.parentNode.insertBefore(draggedItem, this);

//    const droppedElementId = event.dataTransfer.getData("text/plain");
//    const droppedElement = document.getElementById(droppedElementId);
//    const droppedContainer = event.currentTarget; // The container where the div is dropped
 
//    // Append the dropped element to the dropped container
//    droppedContainer.append(droppedElement);
 
//    // Get the ID of the dropped container
//    const droppedContainerId = droppedContainer.id;
//    console.log(droppedContainer);
//    console.log(droppedElementId);
//    console.log(droppedContainerId);

 }
 
 // Drag end event handler
 function dragEnd() {
   this.style.opacity = '1';
   draggedItem = null;
 }
 

// //notification to users

// // Request permission to display notifications
// Notification.requestPermission().then(function(permission) {
//     if (permission === 'granted') {

//         console.log(permission);
//       // Get all the task elements
//       // let tasks = document.getElementsByClassName('taskdue');
//       // console.log(tasks);
  
//       // Get the current date
   
  
//       // Loop through each task element
//       for (var i = 0; i < findUser["mytodos"].length; i++) {
//         // let task = tasks[i];
//         // let dueDate = new Date(task.value);
//          console.log(findUser["mytodos"][1]["taskdue"]);

//          let tasks = findUser["mytodos"][1]["taskdue"];

//          let currentDate = new Date();

//          const kolkataOffset = 5.5 * 60 * 60 * 1000; // Convert offset to milliseconds
// const kolkataTime = new Date(currentDate.getTime() + kolkataOffset);

//          const formattedDate = kolkataTime.toISOString().slice(0, 16);

//          console.log(formattedDate);
//         // Compare the due date with the current date
//         if (tasks == formattedDate) {
//           // Display a notification
//           var notification = new Notification('TodoMaster App', {
//             body: 'The due date for this task has been reached!',
//             icon : 'https://play-lh.googleusercontent.com/92xIZAW-mdwucFX1v8kyTXlLVgZfLczHv8XCVOH1tFc0M3cTRI4q9qJLUM96PqCrgWjc',
//           });
         
//           break;
              
//         }
//       }
//     }
//   });


            // // Add optional event listeners for user interactions with the notification
            // notification.onclick = function(event) {
            //   // Handle notification click event
            //   window.open();
            // };
            // notification.onclose = function(event) {
            //   // Handle notification close event
            //   window.close();
            //   alert("Notification Closed");
            // };


            // navigator.serviceWorker.ready.then((registration) => {
            //   registration.pushManager
            //     .subscribe({ userVisibleOnly: true })
            //     .then((subscription) => {
            //       // Send the subscription endpoint to your server for storage
            //       console.log(subscription);
            //     });
            // });

  
//   // Add snooze functionality
// notification.addEventListener('action', function(event) {
//   if (event.action === 'snooze') {
//     // Perform snooze action
//     console.log("Notification snoozed");
//   }
// });

// // Set notification action button for snooze
// notification.addEventListener('show', function() {
//   notification.addAction('snooze', 'Snooze', 'path-to-snooze-icon.png');
// });




