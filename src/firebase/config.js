// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnviroments } from "../helpers/getEnviroments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnviroments();

// Your web app's Firebase configuration
//DEv/prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAcV6i0w9euITxzdzo8Y2GFm8G6DFV2YjQ",
//   authDomain: "react-curso-2488f.firebaseapp.com",
//   projectId: "react-curso-2488f",
//   storageBucket: "react-curso-2488f.appspot.com",
//   messagingSenderId: "761566676080",
//   appId: "1:761566676080:web:25cacc6d2f550069a2a0b5",
// };

//Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyC_sVnFb9z0P1jaUz-VbqL0dUHNUM1DMd0",
//   authDomain: "test-d4789.firebaseapp.com",
//   projectId: "test-d4789",
//   storageBucket: "test-d4789.appspot.com",
//   messagingSenderId: "180882685553",
//   appId: "1:180882685553:web:914c32f91e6a779e9525d0",
// };
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);
