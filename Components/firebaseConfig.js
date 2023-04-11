import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAIz3JavVSA7AuhiVeUZKubEGssgTH9VGA",
  authDomain: "casino-f93e5.firebaseapp.com",
  projectId: "casino-f93e5",
  storageBucket: "casino-f93e5.appspot.com",
  messagingSenderId: "527637976727",
  appId: "1:527637976727:web:65c651c6623e4ba2d7bbd2"

};
export const app = initializeApp(firebaseConfig);
export const db =  getFirestore();
export const auth = getAuth();
