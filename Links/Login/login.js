const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Sign in using Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            alert('Login successful');
            window.location = 'dashboard.html'; // Redirect to dashboard or home page
        })
        .catch((error) => {
            alert(error.message);
        });
});
