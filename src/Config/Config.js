import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBSjhU1KeXlynUNi-5t1ziKfwLrOh607aM",
    authDomain: "asramedicalandsurgical-7974c.firebaseapp.com",
    projectId: "asramedicalandsurgical-7974c",
    storageBucket: "asramedicalandsurgical-7974c.appspot.com",
    messagingSenderId: "87741839140",
    appId: "1:87741839140:web:5c99528657711a7f37a5b1",
    measurementId: "G-FK40893HRS"
  };
  
  // Initialize Firebase


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }