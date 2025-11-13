// do not share to public

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAk1PmpsK989B2juCUf2IzGxyeiF3iHL0",
  authDomain: "email-password-auth-93a8e.firebaseapp.com",
  projectId: "email-password-auth-93a8e",
  storageBucket: "email-password-auth-93a8e.firebasestorage.app",
  messagingSenderId: "370733670722",
  appId: "1:370733670722:web:6068f325ac0a49dc6b28db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
