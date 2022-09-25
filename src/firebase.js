
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBWxTXA_-ukWl0xT-logTEg4kVJl4_p0Cw",
  authDomain: "baat-cheet-7cbf5.firebaseapp.com",
  projectId: "baat-cheet-7cbf5",
  storageBucket: "baat-cheet-7cbf5.appspot.com",
  messagingSenderId: "547229790757",
  appId: "1:547229790757:web:80782fdf2cb0401eb405cc"
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();