import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCGGlYi2Ix0iNpxfkREHoPlP8KlKUqkS4w",
  authDomain: "hype-49e37.firebaseapp.com",
  projectId: "hype-49e37",
  storageBucket: "hype-49e37.appspot.com",
  messagingSenderId: "133927296086",
  appId: "1:133927296086:web:72a17bcce900ac64e12ff7",
  measurementId: "G-EXXEZ9X6TQ",
  databaseURL:'https://hype-49e37-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth};