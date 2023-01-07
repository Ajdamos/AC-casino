import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";

export function logoutUser(){
    signOut(auth)
}