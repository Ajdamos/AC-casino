// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIz3JavVSA7AuhiVeUZKubEGssgTH9VGA",
  authDomain: "casino-f93e5.firebaseapp.com",
  projectId: "casino-f93e5",
  storageBucket: "casino-f93e5.appspot.com",
  messagingSenderId: "527637976727",
  appId: "1:527637976727:web:65c651c6623e4ba2d7bbd2"

};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =  getFirestore();
export const auth = getAuth();
