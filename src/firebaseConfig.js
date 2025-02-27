// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCA8Y9VayHSd3k-mEzPfjdurG5oUbw9pA",
  authDomain: "buhiin-taawar.firebaseapp.com",
  projectId: "buhiin-taawar",
  storageBucket: "buhiin-taawar.firebasestorage.app",
  messagingSenderId: "835886532811",
  appId: "1:835886532811:web:927bf3038d56ab6003734e",
  measurementId: "G-5S9CYSMPRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);Playwrite_DE_Grund