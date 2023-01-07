import Link from "next/link"
import { useRouter } from "next/navigation"
import { userContext } from "../../Components/contextUser"
import { useContext } from "react"


export default function Navbar() {

  const {user} = useContext(userContext)

  if (user){
    return (
    <div>
        <Link a href="/roulette"><p>Roulette   </p></Link>
        <Link a href="/account"><p>Account   </p></Link>
    </div>
    )
  }
  else {
    return(
      <div>
      <Link a href="/login"><p>login   </p></Link>
      <Link a href="/register"><p>register   </p></Link>
      </div>
    )
  }
}
