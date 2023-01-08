"use client"
import { userContext } from "../Components/contextUser";
import { Navbar } from "./(navbar)/page";
import { useState } from "react";


export default function RootLayout({ children }) {
  const [user, setUser] = useState("")
  

  return (
    <html>
      <userContext.Provider value={{user, setUser}}>
      <head></head>
        <body>
          <Navbar />
          {children}
        </body>
      </userContext.Provider>
    </html>
  )
}

