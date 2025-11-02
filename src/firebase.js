// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// ⚠️ Replace these with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyDPMBNrriczRLh3o-jd4To2o8etsd6uHEY",
  authDomain: "resumebuilder-b73a7.firebaseapp.com",
  projectId: "resumebuilder-b73a7",
  storageBucket: "resumebuilder-b73a7.firebasestorage.app",
  messagingSenderId: "517717752641",
  appId: "1:517717752641:web:d3bfba5255c33dc53c3fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔹 Function to Sign In with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Returning only essential data
    return {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    };
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    return null;
  }
};

// 🔹 Function to Sign Out
export const logout = async () => {
  await signOut(auth);
};
