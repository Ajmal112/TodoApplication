
//password hash encryption
let password = document.getElementById("password");

let hashedpassword;
password.addEventListener("input", () => {

  // function encryptPassword(password) {
  let passwordval = document.getElementById("password").value;

  try {
    // Generate a random salt value
    const salt = CryptoJS.lib.WordArray.random(16);

    // Hash the password using SHA-256 with salt
    const hashedPassword = CryptoJS.SHA256(passwordval + salt);

    hashedpassword = salt.toString() + " " + hashedPassword.toString();

    // Return the salt and hashed password as a string
    return salt.toString() + " " + hashedPassword.toString();
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw error;
  }
});

//confirm password encryption
let confirm_password = document.getElementById("confirm-password");

let hashedconfirm_password;
confirm_password.addEventListener("input", () => {

  // function encryptPassword(password) {
  let confirm_password = document.getElementById("confirm-password").value;

  try {
    // Generate a random salt value
    const salt = CryptoJS.lib.WordArray.random(16);

    // Hash the password using SHA-256 with salt
    const hashedPassword = CryptoJS.SHA256(confirm_password + salt);

    hashedconfirm_password = salt.toString() + " " + hashedPassword.toString();

    // Return the salt and hashed password as a string
    return salt.toString() + " " + hashedPassword.toString();
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw error;
  }
});

//user registration page js code start

let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //try block starts when code is running properly
  try {
    let register_arr = [];

    if (localStorage.getItem("todoRegister") !== null) {
      register_arr = JSON.parse(localStorage.getItem("todoRegister"));
    }

    let courses_arr = [];

    let name = document.getElementById("name").value;
    let gender = document.getElementById("select").value;
    let mobile_number = document.getElementById("mobile-number").value;
    let date_of_birth = document.getElementById("date-of-birth").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    let mytodos = courses_arr;
    let address = "Please Enter Your Address";
    let about_me = "Write About Yourself";
    let user_id = Date.now();

    let match = false;
    let matches = false;
    for (let i = 0; i < register_arr.length; i++) {
      if (register_arr[i]["email"] === email) {
        match = true;
      } else if (register_arr[i]["name"] === name) {
        matches = true;
      } else {
        match = false;
      }
    }

    if (match == true) {
      alert("user already exists");
      return;
    } else if (matches == true) {
      alert("UserName Already Exists Try With Different Name")
      return;
    } else {
      let name = document.getElementById("name").value;

      let mobilenumber = document.getElementById("mobile-number").value;

      let email = document.getElementById("email").value;

      if (password != confirm_password) {
        alert("password not match try again");
        //  window.location.href="register.html";
      } else if (mobilenumber.length > 11) {
        alert("mobile number must contains 10 numbers");
        // location.reload();
      } else {
        let register_obj = {
          name,
          gender,
          mobile_number,
          date_of_birth,
          address,
          about_me,
          email,
          password : hashedpassword,
          confirm_password : hashedconfirm_password,
          profile_pic: `https://ui-avatars.com/api/?name=${name}&background=random`,
          mytodos,
          user_id,
        };

        register_arr.push(register_obj);

        let register = JSON.stringify(register_arr);
        localStorage.setItem("todoRegister", register);

        localStorage.setItem("todoLogin",JSON.stringify(email));

        window.location.href = "../index2.html";
      }
    }

    //catch block starts when throws a error
  } catch (error) {
    console.error("Error" + error);
  }
});
