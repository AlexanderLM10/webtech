// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1wbhnQGb_DtNPuOQvtZHCWnD-zgtf-hk",
  authDomain: "pathhole-2717e.firebaseapp.com",
  projectId: "pathhole-2717e",
  storageBucket: "pathhole-2717e.firebasestorage.app",
  messagingSenderId: "1087293277919",
  appId: "1:1087293277919:web:e1e7be91510d6c11b5cb6a",
  measurementId: "G-XLMYXLXTMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);