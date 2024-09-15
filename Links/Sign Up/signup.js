// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_WVk8Oyq-CDJJANarPdfTpU6wtlzly6U",
  authDomain: "vivid-db.firebaseapp.com",
  projectId: "vivid-db",
  storageBucket: "vivid-db.appspot.com",
  messagingSenderId: "859851963543",
  appId: "1:859851963543:web:a9d8a3111879ab0c8abdd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit Button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value; // Use 'value' instead of 'innerHTML'
  const password = document.getElementById('password').value; // Use 'value' instead of 'innerHTML'

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("User signed up successfully! UwU");
      window.location.href = "../Main Menu/main.html";
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage} UwU`);
    });
});
