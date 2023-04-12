import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getUserData(userEmail){
    
     try{
        const docRef = doc(db, "Users", userEmail)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch {(e => {
    })}
}
