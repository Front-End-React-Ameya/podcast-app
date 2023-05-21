// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Nde5LrWhi1PpaokH9VTK4mCo3DW4Zpc",
  authDomain: "podcast-app-react.firebaseapp.com",
  projectId: "podcast-app-react",
  storageBucket: "podcast-app-react.appspot.com",
  messagingSenderId: "1000345735352",
  appId: "1:1000345735352:web:0636e03e8bc29a24faa44d",
  measurementId: "G-YW158JNBGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export {auth , db, storage};