"use client"
import { firebaseContext } from "../Components/contextFirebase";
import { userContext } from "../Components/contextUser";
import Navbar from "./(navbar)/Page";
import { auth } from "../Components/firebaseConfig"
import { getUserData } from "../Components/getUserData";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function RootLayout({ children }) {
  const [user, setUser] = useState("")
  useEffect(() => {
    onAuthStateChanged(auth, async item => {
      if (item){ 
        setUser(await getUserData(item.email))
      }
      else {setUser("")}
   })
  }, [])

  return (
    <html>
      <firebaseContext.Provider value="hi">
      <userContext.Provider value={{user, setUser}}>
      <head></head>
        <body>
          <Navbar />
          {children}
        </body>
      </userContext.Provider>
      </firebaseContext.Provider>
    </html>
  )
}

