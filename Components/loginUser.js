import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export async function loginUser(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      })
      .catch(er => {
        console.log(er)
      });
}