import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "./firebaseConfig";
export async function addUser(name, email, password){
    await setDoc(doc(db ,"Users", email), {name:name, email:email, currency:1000});
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    }) .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

