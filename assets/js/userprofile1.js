
//get parsed local array
let todoRegister = JSON.parse(localStorage.getItem("todoRegister"));
console.log(todoRegister);

let todoLogin = JSON.parse(localStorage.getItem("todoLogin"));
console.log(todoLogin);

//user object
let findUser = todoRegister.find(user => user.email == todoLogin);
console.log(findUser);

console.log(findUser["about_me"]);
//dynamic profile page
let section;


 section = document.createElement("section");
 section.setAttribute("class","section-head");
 section.innerHTML = `<div class="profilecontainer">
 <div>
  <img id="userprofile-img" src=${findUser["profile_pic"]} alt="">
  <button class="editbtn" id="editbtn" type="button">EDIT PROFILE</button>
  <button class="delbtn" id="delbtn" type="button">DELETE PROFILE</button>
 </div>
 <div class="username-city">
     <h1>${findUser["name"]}</h1>
     <p>${findUser["email"]}</p>
 </div>
</div>

<div class="section2">
<br>
<div class="followlist">
 <div class="followcount-title">
     <p>&nbsp;${findUser["mytodos"].length}</p>
     <p class="follows-title">Todo's</p>
 </div>

 <div class="followcount-title">
     <p>2500</p>
     <p class="follows-title">Followers</p>
 </div>

 <div class="followcount-title">
     <p>5110</p>
     <p class="follows-title">Following</p>
 </div>

</div>


</div>

<div class="section-about-head">
 <h1>About</h1>
  <div class="section-about">
     <div>
       <textarea name="about" type="text"  id="about" disabled  >${findUser["about_me"]}</textarea><br>
       <input name="about" type="text" id="address" value="${findUser["address"]}" disabled ><br>
     </div>
     <div>
       <input name="about" type="date" id="date" value="${findUser["date_of_birth"]}" disabled  ><br>
       <input name="about" type="text"id="gender" value="${findUser["gender"]}" disabled  ><br>
     </div>
     <div>
         <input name="about" type="number" id="number" value="${findUser["mobile_number"]}" disabled  ><br>
         <button type="submit" id="edit" name="edit">Submit</button>
     </div>

  </div>
</div>`;

document.querySelector("#header").append(section);


//profile pic name show
document.getElementById("userprofile-img").style.borderRadius = '20px';



//edit button
let editbtn = document.getElementById("editbtn");
editbtn.addEventListener("click",(event) => {
event.preventDefault();

document.getElementById("about").disabled = false;
document.getElementById("address").disabled = false;
document.getElementById("date").disabled = false;
document.getElementById("gender").disabled = false;
document.getElementById("number").disabled = false;


})



//edit done
let editedbtn = document.getElementById("edit");
editedbtn.addEventListener("click",(event) => {
event.preventDefault();

document.getElementById("about").disabled = true;
document.getElementById("address").disabled = true;
document.getElementById("date").disabled = true;
document.getElementById("gender").disabled = true;
document.getElementById("number").disabled = true;


let about_me = document.getElementById("about").value;
let address = document.getElementById("address").value;
let date_of_birth = document.getElementById("date").value;
let gender = document.getElementById("gender").value;
let mobile_number = document.getElementById("number").value;


let newUserObj = {
    about_me,
    address,
    date_of_birth,
    gender,
    mobile_number
}; 

  let assignUserObj = Object.assign(findUser,newUserObj);
  console.log(assignUserObj);

  let index = todoRegister.indexOf(findUser);
  console.log(index);


  todoRegister[index] = assignUserObj;


  localStorage.setItem("todoRegister",JSON.stringify(todoRegister));

  alert("Profile Edited Successsfully");

  location.reload();
//   window.location.href = "../index2.html";
});


//delete user profile
//edit done
let delbtn = document.getElementById("delbtn");
delbtn.addEventListener("click",(event) => {
event.preventDefault();

let msg = confirm("Are you sure You want to Delete Your User Profile");

if(msg === true) {

    let index = todoRegister.indexOf(findUser);
    console.log(index);

    todoRegister.splice(index,1);

    localStorage.setItem("todoRegister",JSON.stringify(todoRegister));

    alert("UserProfile Successfully Deleted");

    let newWindow = window.open("../index.html","_blank","noopener,noreferrer");
    window.close();
    newWindow.focus();

}

});