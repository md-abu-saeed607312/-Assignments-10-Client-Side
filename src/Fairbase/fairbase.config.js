// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD00rr87oQWEx250kNSwrH5ZvEprGn380Q",
  authDomain: "assignment-10-a05ba.firebaseapp.com",
  projectId: "assignment-10-a05ba",
  storageBucket: "assignment-10-a05ba.firebasestorage.app",
  messagingSenderId: "982884339141",
  appId: "1:982884339141:web:a70a97ef0623c318688fac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);