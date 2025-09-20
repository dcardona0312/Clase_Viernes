// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUoyuEPTOxYvVEm2F6XGmzS-qrdpEhmCw",
  authDomain: "infopc-ff6ab.firebaseapp.com",
  projectId: "infopc-ff6ab",
  storageBucket: "infopc-ff6ab.firebasestorage.app",
  messagingSenderId: "422263020988",
  appId: "1:422263020988:web:7dd9eb8e671ffa2774dfb9",
  measurementId: "G-ND74D6ZV98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    // Firebase app
    db
};