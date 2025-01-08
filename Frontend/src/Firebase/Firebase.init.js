import 'dotenv/config'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG2h5Q2Lv_DGEqm7A8A4Xy1-omR7UskBw",
  authDomain: "espresso-cefaf.firebaseapp.com",
  projectId: "espresso-cefaf",
  storageBucket: "espresso-cefaf.firebasestorage.app",
  messagingSenderId: "887283795828",
  appId: "1:887283795828:web:f30e8659162297e14b8e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default auth = getAuth(app);