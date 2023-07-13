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
    
    findUser["mytodos"].push(todoObj);


    // Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.



 
    localStorage.setItem("todoRegister",JSON.stringify(todoRegister));
  
    alert("Task Added Successfully");

    // location.reload();

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

//reverse todos recent todos will come first
for(let i=0; i<findUser["mytodos"].length; i++) {

 tododiv = document.createElement("a");
 tododiv.setAttribute("class","tododiv");
 tododiv.setAttribute("id",`tododiv-${i}`);
 tododiv.setAttribute("href","pages/tododetails.html?id=" + findUser["mytodos"][i]["todoID"]);
 let splitname = findUser["mytodos"][i]["taskname"];
 let splitdesc = findUser["mytodos"][i]["taskdetails"];
 let splittime = findUser["mytodos"][i]["taskdue"];

 //color priority
 tododiv.innerHTML = `    <span id="taskstatus1">${findUser["mytodos"][i]["taskstatus"]}</span>
 <div class="todoinnerdiv">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytodos"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytodos"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytodos"][i]["taskpriority"]}</p>
 </div>`;
  
 document.querySelector("#todo-container").append(tododiv);

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

//searchbar query event
let search = document.getElementById("searchbarfilter");
search.addEventListener("input",(event)=> {
event.preventDefault();

let cards = document.getElementsByClassName("tododiv");

for(let i=0; i<cards.length;i++){
  let element = cards[i];

  if(element.innerText.toLowerCase().includes(search.value.toLowerCase())){
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
})



let selectsort = document.getElementById("sort");
selectsort.addEventListener("change",(event)=>{
event.preventDefault();

let selectsortvalue = document.getElementById("sort").value;
console.log(selectsortvalue);

if(selectsortvalue === "A-Z (Ascending Order)"){
  findUser["mytodos"].sort(
  function mysort(a,b) {
  let nameA = a.taskname.toLowerCase();
  let nameB = b.taskname.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
  });
   
  document.querySelector("#todo-container").style.display = "none";
  document.querySelector("#todo-container3").style.display = "none";
  document.getElementById("option1").disabled = true;
  document.getElementById("option2").disabled = true;
  document.getElementById("option3").disabled = true;

  let tododiv;

//reverse todos recent todos will come first
for(let i=0; i<findUser["mytodos"].length; i++) {

 tododiv = document.createElement("a");
 tododiv.setAttribute("class","tododiv");
 tododiv.setAttribute("id",`tododiv-${i}`);
 tododiv.setAttribute("href","pages/tododetails.html?id=" + findUser["mytodos"][i]["todoID"]);
 let splitname = findUser["mytodos"][i]["taskname"];
 let splitdesc = findUser["mytodos"][i]["taskdetails"];
 let splittime = findUser["mytodos"][i]["taskdue"];

 //color priority
 tododiv.innerHTML = `    <span id="taskstatus1">${findUser["mytodos"][i]["taskstatus"]}</span>
 <div class="todoinnerdiv">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytodos"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytodos"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytodos"][i]["taskpriority"]}</p>
 </div>`;

  
 document.querySelector("#todo-container2").append(tododiv);

}

  console.log(findUser["mytodos"]);



} else if(selectsortvalue === "Z-A (Descending Order)"){
  findUser["mytodos"].sort(
  function mysort(a,b) {
  let nameA = a.taskname.toLowerCase();
  let nameB = b.taskname.toLowerCase();
  if (nameA < nameB) return 1;
  if (nameA > nameB) return -1;
  return 0;
  });


  document.querySelector("#todo-container").style.display = "none";
  document.querySelector("#todo-container2").style.display = "none";
  document.getElementById("option1").disabled = true;
  document.getElementById("option2").disabled = true;
  document.getElementById("option3").disabled = true;


  let tododiv;

//reverse todos recent todos will come first
for(let i=0; i<findUser["mytodos"].length; i++) {

 tododiv = document.createElement("a");
 tododiv.setAttribute("class","tododiv");
 tododiv.setAttribute("id",`tododiv-${i}`);
 tododiv.setAttribute("href","pages/tododetails.html?id=" + findUser["mytodos"][i]["todoID"]);
 let splitname = findUser["mytodos"][i]["taskname"];
 let splitdesc = findUser["mytodos"][i]["taskdetails"];
 let splittime = findUser["mytodos"][i]["taskdue"];

 //color priority
 tododiv.innerHTML = `    <span id="taskstatus1">${findUser["mytodos"][i]["taskstatus"]}</span>
 <div class="todoinnerdiv">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytodos"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytodos"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytodos"][i]["taskpriority"]}</p>
 </div>`;
  
 document.querySelector("#todo-container3").append(tododiv);


}
  console.log(findUser["mytodos"]);
} else if (selectsortvalue === "Based On Due date") {

   findUser["mytodos"].sort(
    function mysort(a,b){
      return new Date(a.taskdue) - new Date(b.taskdue);
    }
   );

   findUser["mytodos"].forEach(
    function (task){
      return task.taskdue;
    }
   )

   console.log(findUser["mytodos"]);


   for(let i=0; i<findUser["mytodos"].length; i++) {

    tododiv = document.createElement("a");
    tododiv.setAttribute("class","tododiv");
    tododiv.setAttribute("id",`tododiv-${i}`);
    tododiv.setAttribute("href","pages/tododetails.html?id=" + findUser["mytodos"][i]["todoID"]);
    let splitname = findUser["mytodos"][i]["taskname"];
    let splitdesc = findUser["mytodos"][i]["taskdetails"];
    let splittime = findUser["mytodos"][i]["taskdue"];
   
    //color priority
    tododiv.innerHTML = `    <span id="taskstatus1">${findUser["mytodos"][i]["taskstatus"]}</span>
    <div class="todoinnerdiv">
       <p id="taskname1" >${splitname.slice(0,25)}.....</p>
       <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
       <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytodos"][i]["projectname"]}</p>
      <div id="taskdue-assign1">
     <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
     <a id="taskassignee1" href="mailto:${findUser["mytodos"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
   </div> 
       <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytodos"][i]["taskpriority"]}</p>
    </div>`;

     
    document.querySelector("#todo-container4").append(tododiv);
    document.querySelector("#todo-container").style.display = "none";
    document.querySelector("#todo-container2").style.display = "none";
    document.querySelector("#todo-container3").style.display = "none";
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;

   
   }

}

})

//add colors according to the priority
for (let i = 0; i < findUser["mytodos"].length; i++) {
  const todo = findUser["mytodos"][i];
  const priority = todo.taskpriority;

  console.log(priority);

  const element = document.getElementById(`bx-circle-${i}`);
  const tododiv = document.getElementById(`tododiv-${i}`);

if (priority === "High") {
  element.classList.add("red");
  tododiv.classList.add("lightred");
} else if (priority === "Medium") {
  element.classList.add("yellow");
  tododiv.classList.add("lightyellow");
} else if (priority === "Low") {
  element.classList.add("green");
  tododiv.classList.add("lightgreen");
}

}




let selectfilter = document.getElementById("filter");
selectfilter.addEventListener("change",(event)=>{
event.preventDefault();

let selectfiltervalue = document.getElementById("filter").value;
console.log(selectfiltervalue);


document.getElementById("searchbarfilter").style.display = "block";
document.getElementById("searchicon").style.display = "block";

if(selectfiltervalue === "Based On Category"){
  document.getElementById("searchbarfilter").placeholder = "Search Category : Academic Tasks"
} else if (selectfiltervalue === "Based On Assignee") {
  document.getElementById("searchbarfilter").placeholder = "Search Assignee : freekyajmal@gmail.com"
} else if (selectfiltervalue === "Based On Status") {
  document.getElementById("searchbarfilter").placeholder = "Search Status : Completed"
} else if (selectfiltervalue === "Based On Priority") {
  document.getElementById("searchbarfilter").placeholder = "Search Priority : High"
} else if (selectfiltervalue === "Based On Tags") {
  document.getElementById("searchbarfilter").placeholder = "Search Tags : #Project #Presentation"
}


});


//google signup function

// function signIn(){
//   // Google's OAuth 2.0 endpoint for requesting an access token
// var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

// // Create <form> element to submit parameters to OAuth 2.0 endpoint.
// var form = document.createElement('form');
// form.setAttribute('method', 'GET'); // Send as a GET request.
// form.setAttribute('action', oauth2Endpoint);

// // Parameters to pass to OAuth 2.0 endpoint.
// var params = {'client_id': '532880105750-8r2o3fhfqvk90q3h5pihmu5ji2fhv0nl.apps.googleusercontent.com',
//               'redirect_uri': 'http://127.0.0.1:5500/index2.html',
//               'response_type': 'token',
//               'scope':'https://www.googleapis.com/auth/userinfo.profile',
//               'include_granted_scopes': 'true',
//               'state': 'pass-through value'};

// // Add form parameters as hidden input values.
// for (var p in params) {
//   var input = document.createElement('input');
//   input.setAttribute('type', 'hidden');
//   input.setAttribute('name', p);
//   input.setAttribute('value', params[p]);
//   form.appendChild(input);
// }

// // Add form to page and submit it to open the OAuth 2.0 endpoint.
// document.body.appendChild(form);
// form.submit();
// }

// //urlparams
//     // Parse query string to see if page request is coming from OAuth 2.0 server.
//     var params = {};
//     var regex = /([^&=]+)=([^&]*)/g, m;
//     while (m = regex.exec(location.href)) {
//         params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
//     }
//     if (Object.keys(params).length > 0) {
//         localStorage.setItem('authInfo', JSON.stringify(params));
//     }
//     window.history.pushState({}, document.title, "/" + "index2.html");
//     let info = JSON.parse(localStorage.getItem('authInfo'))
//     console.log(info['access_token'])
//     console.log(info['expires_in'])

//     //accessaccount
//     fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
//         headers: {
//             "Authorization": `Bearer ${info['access_token']}`
//         }
//     })
//         .then(data => data.json())
//         .then((info) => {
//             console.log(info)
           
//         })


//     // Load the Google Calendar API client and initialize it
//     function initClient() {
//       gapi.client.init({
//         apiKey: 'AIzaSyBGmKJ_I5LQ1J5HSdjeg7vMkRhMiHr7TY8',
//         clientId: '532880105750-8r2o3fhfqvk90q3h5pihmu5ji2fhv0nl.apps.googleusercontent.com',
//         discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
//         scope: 'https://www.googleapis.com/auth/calendar.events'
//       }).then(function() {
//         // API client initialization succeeded
//         console.log('API client initialized');
//       }).catch(function(error) {
//         // API client initialization failed
//         console.error('Error initializing API client:', error);
//       });
//     }

//     // Function to add an event to Google Calendar
//     function addEventToCalendar() {
//       // Check if the API client is initialized
//       if (!gapi.client || !gapi.client.calendar) {
//         console.error('API client is not initialized');
//         return;
//       }

//       // Your code to add the event to the calendar
//       var event = {
//         'summary': 'Test Event',
//         'start': {
//           'dateTime': '2023-05-20T11:58:00',
//           'timeZone': 'Asia/Kolkata'
//         },
//         'end': {
//           'dateTime': '2023-05-20T12:00:00',
//           'timeZone': 'Asia/Kolkata'
//         }
//       };

//       gapi.client.calendar.events.insert({
//         'calendarId': 'primary',
//         'resource': event
//       }).then(function(response) {
//         console.log('Event added:', response);
//       }).catch(function(error) {
//         console.error('Error adding event:', error);
//       });
//     }

//     // Load the Google API client library
//     gapi.load('client:auth2', initClient);


//notification to users

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
//           let notification = new Notification('TodoMaster App', {
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


