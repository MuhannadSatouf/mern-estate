// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-fd7a9.firebaseapp.com",
    projectId: "mern-estate-fd7a9",
    storageBucket: "mern-estate-fd7a9.appspot.com",
    messagingSenderId: "449501285111",
    appId: "1:449501285111:web:dbe89854f45fe96c2561f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);