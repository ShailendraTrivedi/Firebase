// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD99aIksIf3d_m58O4N44UYOtfKLPgFWVU",
  authDomain: "fir-40e68.firebaseapp.com",
  projectId: "fir-40e68",
  storageBucket: "fir-40e68.appspot.com",
  messagingSenderId: "55468944727",
  appId: "1:55468944727:web:6d181b97072395df502212",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export default app;
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  db,
  collection,
  addDoc,
  setDoc,
  doc,
  getFirestore,
  updateDoc,
  getDoc,
};
