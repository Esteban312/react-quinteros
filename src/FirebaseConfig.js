
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK_sqoPUfLEcTxEYDTaeCRZ1fvxNiTeD0",
  authDomain: "react-69590.firebaseapp.com",
  projectId: "react-69590",
  storageBucket: "react-69590.firebasestorage.app",
  messagingSenderId: "88264372490",
  appId: "1:88264372490:web:db06802b233543e191caf3"
};


const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)