import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBGnr5dxX-PTOVfwxHN0Dq-05MGPj7A84",
  authDomain: "fir-2b97a.firebaseapp.com",
  projectId: "fir-2b97a",
  storageBucket: "fir-2b97a.firebasestorage.app",
  messagingSenderId: "551601253455",
  appId: "1:551601253455:web:c9813b4e1fcc85cb588e3a",
  measurementId: "G-WBYGKGXKT2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)