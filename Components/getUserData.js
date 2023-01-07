import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export async function getUserData(userEmail){
    
     try{
        const docRef = doc(db, "Users", userEmail)
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data())
        return docSnap.data()
    } catch {(e => {
        console.log(e)
    })}
}
