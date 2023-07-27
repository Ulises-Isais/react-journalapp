// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcV6i0w9euITxzdzo8Y2GFm8G6DFV2YjQ",
  authDomain: "react-curso-2488f.firebaseapp.com",
  projectId: "react-curso-2488f",
  storageBucket: "react-curso-2488f.appspot.com",
  messagingSenderId: "761566676080",
  appId: "1:761566676080:web:25cacc6d2f550069a2a0b5",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);
