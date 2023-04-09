"use client";
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import "./navbar.css"
import Link from "next/link"
import { auth } from "../../Components/firebaseConfig"
import { getUserData } from "../../Components/getUserData"
import { userContext } from "../../Components/contextUser"
import { useContext } from "react"

export default function navbar(){
    const {user, setUser} = useContext(userContext)
    useEffect(() => {
        onAuthStateChanged(auth, async item => {
          if (item){ 
            setUser(await getUserData(item.email))
          }
          else {setUser("")}
       })
      }, [])
    return (
        <div className="containerNavbar">
            <Link a href="/roulette"><p className="navItem">Roulette</p></Link>
            <Link a href="/slots"><p className="navItem">Slots</p></Link>
            <Link a href="/account"><p className="navItem">User {user?.name}</p></Link>
        </div>
    )
}