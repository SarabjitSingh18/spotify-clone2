// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzh0XaBFIYj9N46iynQLtWav3RpaBk_QM",
  authDomain: "spotify-react-9e58f.firebaseapp.com",
  projectId: "spotify-react-9e58f",
  storageBucket: "spotify-react-9e58f.appspot.com",
  messagingSenderId: "570249039646",
  appId: "1:570249039646:web:0798514d09ae893accc30f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

