// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSXO0MBke5UDUMSOfV2Cpt73_jL_1QGvU",
  authDomain: "email-password-authh-f23e0.firebaseapp.com",
  projectId: "email-password-authh-f23e0",
  storageBucket: "email-password-authh-f23e0.firebasestorage.app",
  messagingSenderId: "346627170228",
  appId: "1:346627170228:web:c080669c0f61e6b3ab5ce1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
