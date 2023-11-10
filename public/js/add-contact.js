// add-contact.js

// Assuming you have already initialized Firebase (as shown in your firebase-init.js file)

// Get a reference to the Firestore database
const db = firebase.firestore();

// Function to add a new contact with optional fields
function addContact(fName, lName, phone, email, address, idNumber) {
  // Validate that fName, lName, and phone are not null or empty
  if (!fName || !lName || !phone) {
    console.error("First name, last name, and phone cannot be null or empty.");
    return;
  }

  // Add a new document to the "contacts" collection with phone as the document ID
  db.collection("contacts")
    .doc(phone)
    .set({
      fName: fName,
      lName: lName,
      email: email || null, // Set to null if not provided
      address: address || null, // Set to null if not provided
      idNumber: idNumber || null, // Set to null if not provided
    })
    .then(() => {
      console.log("Contact added with phone number: ", phone);
    })
    .catch((error) => {
      console.error("Error adding contact: ", error);
    });
}

// Example usage
// You can call the addContact function with the desired parameters here
// For example:
// addContact("John", "Doe", "+1234567890", "john.doe@example.com", "123 Main St", "ABC123");
// addContact("Jane", "Doe", "+9876543210");
