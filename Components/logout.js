import { auth } from "./FirebaseConfig";
import { signOut } from "firebase/auth";

export function logoutUser(){
    signOut(auth)
}