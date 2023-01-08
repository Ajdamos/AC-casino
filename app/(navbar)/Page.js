import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import "./navbar.css"
import Link from "next/link"
import { auth } from "../../Components/firebaseConfig"
import { getUserData } from "../../Components/getUserData"
import { userContext } from "../../Components/contextUser"
import { useContext } from "react"


export function Navbar(){
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
            <Link a href="/account"><p className="navItem">Account: {user?.nickname}</p></Link>
            <Link a href="/roulette"><p className="navItem">Roulette</p></Link>
        </div>
    )
}