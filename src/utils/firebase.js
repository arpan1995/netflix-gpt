// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuKjGtMjlU1j5f7N14N4G_JxCYSqS9VTY",
  authDomain: "netflixgpt-7cacc.firebaseapp.com",
  projectId: "netflixgpt-7cacc",
  storageBucket: "netflixgpt-7cacc.appspot.com",
  messagingSenderId: "167597291818",
  appId: "1:167597291818:web:f73ffebf04d3dd409a4653",
  measurementId: "G-6CYRJDEQY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();