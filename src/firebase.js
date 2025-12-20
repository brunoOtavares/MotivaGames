// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD5DgMjwF7tt88-GubJhARGLCwyfs-Fws",
  authDomain: "motivacionalgames.firebaseapp.com",
  projectId: "motivacionalgames",
  storageBucket: "motivacionalgames.firebasestorage.app",
  messagingSenderId: "1002580358180",
  appId: "1:1002580358180:web:2e317cdd2df0ae5da254b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
