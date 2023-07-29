import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfwiQqAlAYdtF-gWjWak3YE0c4fMF808M",
  authDomain: "whatsapp-clone-90caf.firebaseapp.com",
  projectId: "whatsapp-clone-90caf",
  storageBucket: "whatsapp-clone-90caf.appspot.com",
  messagingSenderId: "124571135226",
  appId: "1:124571135226:web:60e59db9c955f939d0ad43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth};