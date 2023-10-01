// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqoeGeQ6BBsirWcTRW6wKZyAx6VSMfVzI",
  authDomain: "task7-b82d4.firebaseapp.com",
  projectId: "task7-b82d4",
  storageBucket: "task7-b82d4.appspot.com",
  messagingSenderId: "45308032764",
  appId: "1:45308032764:web:3175cafcf9731c89700979",
  measurementId: "G-Y3J34HE5XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);