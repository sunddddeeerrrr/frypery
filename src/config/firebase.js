import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQxZwnaPooZGYhucCww5KVS5R6BjOGA3Q",
  authDomain: "frypery-32b31.firebaseapp.com",
  projectId: "frypery-32b31",
  storageBucket: "frypery-32b31.appspot.com",
  messagingSenderId: "22337118137",
  appId: "1:22337118137:web:b1c97c65aad7a883422068",
  measurementId: "G-DMXMGCJ5RZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
