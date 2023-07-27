// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCliylac_enqBHpF6QSUMUOZm9-QRCEAU",
  authDomain: "dan-todo-94133.firebaseapp.com",
  projectId: "dan-todo-94133",
  storageBucket: "dan-todo-94133.appspot.com",
  messagingSenderId: "783662863711",
  appId: "1:783662863711:web:29eb550edc74a6098752ea",
  measurementId: "G-ZX08M9P10Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
