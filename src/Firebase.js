import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAHavl7o_EFHi65IVUiQEnR5X3ZsfjgjSE",
  authDomain: "my-e-commerce-d23de.firebaseapp.com",
  projectId: "my-e-commerce-d23de",
  storageBucket: "my-e-commerce-d23de.appspot.com",
  messagingSenderId: "12590688852",
  appId: "1:12590688852:web:6c52c6497483342f741bc1",
  measurementId: "G-3VY0513863",
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(Firebase);
};
