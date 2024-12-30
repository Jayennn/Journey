// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz9-RIia_Ud7vMj2fEnxipzQohU3pmxf8",
  authDomain: "tiffany-journey.firebaseapp.com",
  databaseURL: "https://tiffany-journey-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tiffany-journey",
  storageBucket: "tiffany-journey.firebasestorage.app",
  messagingSenderId: "1031154732832",
  appId: "1:1031154732832:web:654fa8a1ac37f62b845145",
  measurementId: "G-M29RSEPPK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app)