// add-contact.js

// Function to add a new contact with optional fields
function addContact(fName, lName, phone, email, address, idNumber) {
  // Simple validation for fName, lName, and phone
  if (!fName.trim() || !lName.trim() || !phone.trim()) {
    console.error("First name, last name, and phone are required fields and cannot be empty.");
    // Handle the error appropriately
    return; // Exit the function if validation fails
  }
  // Check if a contact with the same phone number already exists
  const contactRef = db.collection('contacts').doc(phone);
  
  contactRef.get().then((doc) => {
    if (doc.exists) {
      // The contact already exists, handle the error
      console.error("A contact with this phone number already exists.");
      // Here you can handle the error, such as displaying a message to the user
    } else {
      // The contact does not exist, proceed with adding a new contact
      contactRef.set({
        firstName: fName.trim(),
        lastName: lName.trim(),
        phone: phone.trim(),
        email: email ? email.trim() : null,
        address: address ? address.trim() : null,
        idNumber: idNumber ? idNumber.trim() : null
      })
      .then(() => {
        console.log("Contact added successfully.");
        // Further actions upon successful contact addition
      })
      .catch((error) => {
        console.error("Error adding contact: ", error);
        // Error handling
      });
    }
  }).catch((error) => {
    console.error("Error checking for contact existence: ", error);
    // Error handling for the existence check
  });
}


console.log("Registering addContactBtn event listener");
document.getElementById('addContactBtn').addEventListener('click', function() {
  var fName = document.getElementById('fName').value;
  var lName = document.getElementById('lName').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var idNumber = document.getElementById('idnumber').value;
  
  addContact(fName, lName, phone, email, address, idNumber);
});
console.log("addContactBtn event listener registered");

// Example usage
// You can call the addContact function with the desired parameters here
// For example:
// addContact("John", "Doe", "+1234567890", "john.doe@example.com", "123 Main St", "ABC123");
// addContact("Jane", "Doe", "+9876543210");
