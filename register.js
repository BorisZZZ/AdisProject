// Register function
function registerUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value; // Ensure you have a password field in your form
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // You can now store additional user information in Firestore if needed
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // Handle errors here, such as displaying a message to the user
      });
  }

  function storeUserData(userId, name, surname, phone, address, idNumber) {
    // Add a new document with a generated id.
    firebase.firestore().collection("users").doc(userId).set({
      name: name,
      surname: surname,
      phone: phone,
      address: address,
      idNumber: idNumber
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  }