

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCXqyjyBOp9Qmz6qbd4alxqxDIqUECnNCg",
    authDomain: "sign-up-6d28d.firebaseapp.com",
    databaseURL: "https://sign-up-6d28d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sign-up-6d28d",
    storageBucket: "sign-up-6d28d.appspot.com",
    messagingSenderId: "769377115399",
    appId: "1:769377115399:web:f0fd67c94c10edc53af9a2",
    measurementId: "G-WEVMD3JGGF"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const realtimeDb = getDatabase(app);

export { auth, provider, db, storage, collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc, realtimeDb };

