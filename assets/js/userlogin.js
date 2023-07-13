//user login password compare

let password = document.getElementById("password");

let hashedpassword;
password.addEventListener(
  "input",
  (userInputPassword, saltAndHashedPassword) => {

    let register_data = JSON.parse(localStorage.getItem("todoRegister"));
    
    let datasall;
    // if( event.key === 'Enter' ){
    for (let i = 0; i < register_data.length; i++) {
      datasall = register_data[i]["password"];
    }

    // function encryptPassword(password) {
    let passwordval = document.getElementById("password").value;

    try {
      const saltAndHashedPassword = datasall;
      // Split the stored salt and hashed password
      const [salt, storedHash] = saltAndHashedPassword.split(" ");

      // Hash the user input password with the stored salt
      const hashedPassword = CryptoJS.SHA256(
        passwordval + CryptoJS.enc.Hex.parse(salt)
      );

      hashedpassword = hashedPassword.toString() === storedHash;


      // Compare the hashed user input password with the stored hash
      return hashedPassword.toString() === storedHash;
    } catch (error) {
      console.error("Error comparing password:", error);
      throw error;
    }
    // }

    // };
  }
);

//user login page js code start

let login = document.getElementById("form");
login.addEventListener("submit", (event) => {
  event.preventDefault();

  //try statement
  try {
    let todoRegister = JSON.parse(localStorage.getItem("todoRegister"));

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let match = false;
    for (let i = 0; i < todoRegister.length; i++) {
      if (email == todoRegister[i]["email"] && hashedpassword === true) {
        match = true;
        localStorage.setItem(
          "todoLogin",
          JSON.stringify(todoRegister[i]["email"])
        );
        break;
      } else {
        match = false;
      }
    }

    if (match == true) {
      alert("user login successfully");

let newWindow = window.open("../index2.html", '_blank', "noopener,noreferrer");
window.close();
newWindow.focus();

    } else {
      alert("invalid user credentials");
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

//user login page js code end
