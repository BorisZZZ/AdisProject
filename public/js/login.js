// login.js

// Listen for auth status changes
firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in, redirect to home page or dashboard
      window.location = 'home.html'; // Change 'home.html' to the path of your home page
    }
  });
  
  // Log in with Google
  document.getElementById('google-login').addEventListener('click', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });
  