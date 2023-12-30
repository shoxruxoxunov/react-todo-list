import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDmJubsZhmOdIH6OfxXz2l7hT8LKYlOgpA",
  authDomain: "todolist2-2a41f.firebaseapp.com",
  projectId: "todolist2-2a41f",
  storageBucket: "todolist2-2a41f.appspot.com",
  messagingSenderId: "408989943448",
  appId: "1:408989943448:web:289ec7fff2d3e18db8f2ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
