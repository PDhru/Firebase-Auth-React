// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdYyeTJy7SdmJXjOl6u1LB46CXfswC6N0",
  authDomain: "fir-auth-7a1ab.firebaseapp.com",
  projectId: "fir-auth-7a1ab",
  storageBucket: "fir-auth-7a1ab.firebasestorage.app",
  messagingSenderId: "77436329718",
  appId: "1:77436329718:web:4d417cca5f5b0a607e96d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
