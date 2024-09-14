const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const username = document.getElementById('signup-username').value;

    // Sign up using Firebase
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Add user to Firebase auth and store additional user data (username)
            const user = userCredential.user;
            return user.updateProfile({
                displayName: username
            });
        })
        .then(() => {
            alert('User signed up successfully');
            window.location = 'login-page.html'; // Redirect to login page
        })
        .catch((error) => {
            alert(error.message);
        });
});
