  // Your web app's Firebase configuration  
  const firebaseConfig = {
    apiKey: "AIzaSyAis-L3fSvoy8Y4rZPoN-BsWKbetGEduuA",
    authDomain: "tzuberisproject.firebaseapp.com",
    projectId: "tzuberisproject",
    storageBucket: "tzuberisproject.appspot.com",
    messagingSenderId: "1017982541933",
    appId: "1:1017982541933:web:a5807dd4a0c30ec4621f64"
  };

  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';


  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  if (isLocalhost) {
    const auth = firebase.auth(); 
    auth.useEmulator("http://127.0.0.1:9099");
    db.useEmulator("127.0.0.1", 8087);
  };