import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA20_sWx3s7uwW_ay1W_9mx4mby9iAkpX4",
  authDomain: "frypery.firebaseapp.com",
  projectId: "frypery",
  storageBucket: "frypery.appspot.com",
  messagingSenderId: "372503097033",
  appId: "1:372503097033:web:3c1e2266d72f0268976718"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
