

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyC_G-cV2z_RbVO7rjGB9o7e9pZ0nsavtTQ",
    authDomain: "skwebsite-df527.firebaseapp.com",
    databaseURL: "https://skwebsite-df527-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "skwebsite-df527",
    storageBucket: "skwebsite-df527.appspot.com",
    messagingSenderId: "950246300063",
    appId: "1:950246300063:web:1d3dacc9f19b89e84205aa",
    measurementId: "G-NZPHQLT27P"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const realtimeDb = getDatabase(app);

export { auth, provider, db, storage, collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc, realtimeDb };

