import * as firebase from 'firebase';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyBaKilf3fR2OB7KdRFp-ej8u3UKeIKp8p0",
  authDomain: "booking-a7598.firebaseapp.com",
  projectId: "booking-a7598",
  storageBucket: "booking-a7598.appspot.com",
  messagingSenderId: "820577806642",
  appId: "1:820577806642:web:e82962f3e1e4d332b1cf2b",
  measurementId: "G-YRJBNGZC26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig).firestore()

  firebase.firestore();

export default firebase;