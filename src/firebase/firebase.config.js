// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9S57pJsgy-CK7eEvCQdHKeAH2yUSdhH4",
  authDomain: "project-m5-79c74.firebaseapp.com",
  projectId: "project-m5-79c74",
  storageBucket: "project-m5-79c74.appspot.com",
  messagingSenderId: "606973228188",
  appId: "1:606973228188:web:cb11047a2e5a4d24356959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;