// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd5qa0xSGDE1L-cr8xjve4fYyrCbkVRmw",
  authDomain: "sofastudio-2610e.firebaseapp.com",
  projectId: "sofastudio-2610e",
  storageBucket: "sofastudio-2610e.appspot.com",
  messagingSenderId: "119400555607",
  appId: "1:119400555607:web:be1c32cf9664d392b52f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)