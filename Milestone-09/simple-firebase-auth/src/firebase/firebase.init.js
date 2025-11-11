// do not send this file to git repo

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiwL702VS6iLU6lFVzRJUqnD9R2LIbpQU",
  authDomain: "simple-firebase-auth-73897.firebaseapp.com",
  projectId: "simple-firebase-auth-73897",
  storageBucket: "simple-firebase-auth-73897.firebasestorage.app",
  messagingSenderId: "813789998449",
  appId: "1:813789998449:web:faa83f71a431418e901ad0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
