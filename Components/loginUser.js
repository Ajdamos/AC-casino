import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export function loginUser(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user)
      })
      .catch(() => {
        console.log('error')
      });
}