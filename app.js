document.addEventListener('DOMContentLoaded', (event) => {
    // Here you would add your event listeners for your buttons
    // For example:
    const addUserButton = document.getElementById('addUserButton');
    addUserButton.addEventListener('click', function() {
      // Code to handle the Add User button click
    });
  });
  

  function registerUser() {
    var email = document.getElementById('email').value; // Get email from input
    var password = document.getElementById('password').value; // Get password from input
  
    // Use Firebase Authentication to create a new user
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful
        var user = userCredential.user;
        storeUserData(user.uid); // Call a function to store additional user data in Firestore
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // Display an error message to the user
      });
  }

  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      // User is not signed in, redirect to login page
      window.location = 'login.html'; // Change 'login.html' to the path of your login page
    }
  });
  