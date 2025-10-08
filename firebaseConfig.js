// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVJ6fLlXb5AtewoXedwKyXoM4Qhlac6cI",
  authDomain: "footsypop-96a28.firebaseapp.com",
  projectId: "footsypop-96a28",
  storageBucket: "footsypop-96a28.firebasestorage.app",
  messagingSenderId: "998785878259",
  appId: "1:998785878259:web:dc21a5fc26989f604bcf86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
