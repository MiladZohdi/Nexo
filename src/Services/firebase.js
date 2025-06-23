// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY_jMJEBfSq5SrNI4cEI-hlncMLKLyFzc",
  authDomain: "nexo-b3242.firebaseapp.com",
  projectId: "nexo-b3242",
  storageBucket: "nexo-b3242.firebasestorage.app",
  messagingSenderId: "322790276524",
  appId: "1:322790276524:web:54ea7361bea363fe468e09",
  measurementId: "G-7VF2VW1598",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
