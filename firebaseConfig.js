// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc,
    serverTimestamp
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQW9DFtW7l2EEffwKYMVFkeRQ-Q1FSdko",
    authDomain: "rallyfotografico-c02ce.firebaseapp.com",
    projectId: "rallyfotografico-c02ce",
    storageBucket: "rallyfotografico-c02ce.firebasestorage.app",
    messagingSenderId: "112658903542",
    appId: "1:112658903542:web:93d13fb4600c6c15b8d7d7",
    measurementId: "G-0ZJQH9K4DM"
};

// Inicializar la app solo si aún no ha sido inicializada.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {
    auth,
    firestore,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    serverTimestamp,
    signOut
};