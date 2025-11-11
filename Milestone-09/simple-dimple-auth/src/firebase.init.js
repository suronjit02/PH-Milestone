// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqa8_hxYcMxDqn8PikvHOi4-1szd4QetQ",
  authDomain: "simple-dimple-66a16.firebaseapp.com",
  projectId: "simple-dimple-66a16",
  storageBucket: "simple-dimple-66a16.firebasestorage.app",
  messagingSenderId: "928832945461",
  appId: "1:928832945461:web:a3c3f40b53b3b9d5d2a07c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);