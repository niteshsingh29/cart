import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBm8aZZR9BNcgjQfGSBHFFY61uTaYy91xE",
  authDomain: "cart-17b43.firebaseapp.com",
  projectId: "cart-17b43",
  storageBucket: "cart-17b43.appspot.com",
  messagingSenderId: "876260222512",
  appId: "1:876260222512:web:33e3eb3f8af7ad77e3eff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
