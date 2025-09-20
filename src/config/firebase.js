// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyB4Y3uimDgKOtuhZNGVYuLwqEZ1uc3zbIM",
  authDomain: "hydrax-1234.firebaseapp.com",
  projectId: "hydrax-1234",
  storageBucket: "hydrax-1234.firebasestorage.app",
  messagingSenderId: "486697442238",
  appId: "1:486697442238:web:23ec71c674d4c0b913b7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;