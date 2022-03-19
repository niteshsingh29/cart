import firebase from "firebase";
// import "firebase/firestore";



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBm8aZZR9BNcgjQGSBHFFY61uTaYy91xE",
  authDomain: "cart-17b43.firebaseapp.com",
  projectId: "cart-17b43",
  storageBucket: "cart-17b43.appspot.com",
  messagingSenderId: "876260222512",
  appId: "1:876260222512:web:33e3eb3f8af7ad77e3eff5",
});

let db = firebase.firestore();

export default db;
