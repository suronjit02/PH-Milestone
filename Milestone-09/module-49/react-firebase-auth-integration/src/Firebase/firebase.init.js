// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNWyt5wm6Go4wvCGfo8d1W_lq4Lnp94Js",
  authDomain: "react-firebase-auth-inte-c52f2.firebaseapp.com",
  projectId: "react-firebase-auth-inte-c52f2",
  storageBucket: "react-firebase-auth-inte-c52f2.firebasestorage.app",
  messagingSenderId: "185164287782",
  appId: "1:185164287782:web:71867c088fa2df4684fbe7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
