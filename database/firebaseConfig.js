// Import the functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF5DNQqipRyQ_RZ-c2wrU1uYg4bxHgGIE",
    authDomain: "pluto-2b00c.firebaseapp.com",
    projectId: "pluto-2b00c",
    storageBucket: "pluto-2b00c.appspot.com",
    messagingSenderId: "302787790119",
    appId: "1:302787790119:web:6223f569cd039f40995502",
    measurementId: "G-S70EJV7C1C"
};

// Initialize Firebase:
const app = initializeApp(firebaseConfig);

// Cloud Storage
const db = getFirestore(app);
// Authentication API
const auth = getAuth(app);
// Analytics
const analytics = getAnalytics(app);

export { db, auth, analytics };