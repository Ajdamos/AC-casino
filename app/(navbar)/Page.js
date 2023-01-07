import Link from "next/link"
import { useRouter } from "next/navigation"
import { userContext } from "../../Components/contextUser"
import { useContext } from "react"


export default function Navbar() {

  const {user} = useContext(userContext)
  const router = useRouter
  if (user){
    return (
    <div>
        <Link a href="roulette">Roulette   </Link>
        <Link a href="account">Account   </Link>
    </div>
    )
  }
  else {
    return(
      <div>
      <Link a href="login">login   </Link>
      <Link a href="register">register   </Link>
      </div>
    )
  }
}
