import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCKzh8ZbBTV8IrcPN7Jznv3wnExI109EQA",
  authDomain: "attendanceapplicationsmit.firebaseapp.com",
  projectId: "attendanceapplicationsmit",
  storageBucket: "attendanceapplicationsmit.appspot.com",
  messagingSenderId: "367130712066",
  appId: "1:367130712066:web:161d5512f26551df4d2f1b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// var submit_btn = document
//   .getElementById("submit_btn")
//   .addEventListener("click", function () {
//     var admin_user = document.getElementById("admin_user");
//     var admin_password = document.getElementById("admin_password");

//     console.log(admin_user.value);
//     console.log(admin_password.value);

//     signInWithEmailAndPassword(auth, admin_user.value, admin_password.value)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;

//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });
//   });



var submit_btn = document
  .getElementById("submit_btn")
  .addEventListener("click", function() {

    var admin_user = document.getElementById("admin_user");
    var admin_password = document.getElementById("admin_password");
    var credentialAlert2 = document.getElementById("credentialAlert2");
    admin_user.value;
    admin_password.value;
    var userEmail;
    var userPassword;
    var signin; //for obj
  
    if (!(admin_user.value && admin_password.value)) {
      admin_user.placeholder = "must be fill";
      admin_password.placeholder = "must be fill";
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(admin_user.value) ===
      false
    ) {
      credentialAlert2.innerHTML = "invalid email address format";
      setTimeout(function () {
        credentialAlert2.innerHTML = "";
      }, 4000);
    } else {

      
    signInWithEmailAndPassword(auth, admin_user.value, admin_password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      var qWindow=window.open()
      qWindow.location.href="admin.html";
       setTimeout(function () {
        credentialAlert2.innerHTML = "";
      }, 3500);
      admin_user.value = "";
      admin_password.value = "";
      // admin_user.placeholder = "";
      // admin_password.placeholder = "";
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
      
   
 
    }
});



// ==================================================================================
var  addClass= document
  .getElementById("addClass")
  .addEventListener("click", function() {


      
  });