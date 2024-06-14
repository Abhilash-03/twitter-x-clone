// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-x-next.firebaseapp.com",
  projectId: "twitter-x-next",
  storageBucket: "twitter-x-next.appspot.com",
  messagingSenderId: "564765290617",
  appId: "1:564765290617:web:fc19869cac1e85912024a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);