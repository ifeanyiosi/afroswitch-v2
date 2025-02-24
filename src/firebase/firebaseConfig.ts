// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxBcTVFcFDnvIf8D36v_PpDwM8TEyapPg",
  authDomain: "afroswitch-d8b33.firebaseapp.com",
  projectId: "afroswitch-d8b33",
  storageBucket: "afroswitch-d8b33.firebasestorage.app",
  messagingSenderId: "913730877338",
  appId: "1:913730877338:web:dac1c5d1a89a31e3922c23",
  measurementId: "G-4DNCWK3BHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
