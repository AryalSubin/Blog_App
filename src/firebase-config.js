// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDger8lcOZqZGxwaquO0UPPUx3o5a2uFfY",
  authDomain: "blogproject-93385.firebaseapp.com",
  projectId: "blogproject-93385",
  storageBucket: "blogproject-93385.appspot.com",
  messagingSenderId: "96571143419",
  appId: "1:96571143419:web:1675146eb9c4e25f4c2c5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();