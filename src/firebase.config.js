
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBG3NzNfYwMIa1MSG4M9_kV2oLr6DKpaW0",
  authDomain: "ekia-d7e81.firebaseapp.com",
  projectId: "ekia-d7e81",
  storageBucket: "ekia-d7e81.appspot.com",
  messagingSenderId: "500734089721",
  appId: "1:500734089721:web:b18b83db94357a0c68c528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 