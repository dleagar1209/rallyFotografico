// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQW9DFtW7l2EEffwKYMVFkeRQ-Q1FSdko",
    authDomain: "rallyfotografico-c02ce.firebaseapp.com",
    projectId: "rallyfotografico-c02ce",
    storageBucket: "rallyfotografico-c02ce.firebasestorage.app",
    messagingSenderId: "112658903542",
    appId: "1:112658903542:web:93d13fb4600c6c15b8d7d7",
    measurementId: "G-0ZJQH9K4DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);