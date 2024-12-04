import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCcj2W_5SuxZTa7xpFB-Vo9yDT3uCcLzJE",
    authDomain: "neovita-1d110.firebaseapp.com",
    databaseURL: "https://neovita-1d110-default-rtdb.firebaseio.com",
    projectId: "neovita-1d110",
    storageBucket: "neovita-1d110.firebasestorage.app",
    messagingSenderId: "538964539256",
    appId: "1:538964539256:web:73916979d6bce6dfc67a8d",
    measurementId: "G-7EDL3YXFBE"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  // Esto debe estar bien configurado

export { database };
