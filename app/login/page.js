"use client";
import "./login.css"
import { useState } from "react";
import { loginUser } from "../../Components/loginUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function login() {
    const [information, setInformation]  = useState({email: "", password: ""})
    const router = useRouter()

    const HandleSubmit = () => {
        loginUser(information.email, information.password);
        router.push('/account')
    }
    return (
    <div className="container">
        <h2>Login</h2>
        <input placeholder='Email' className="item" onChange={(e) => setInformation(information => ({...information, email: e.target.value}))} value={information.email}/>
        <input placeholder='Password' onChange={(e) => setInformation(information => ({...information, password: e.target.value}))} value={information.password}/>
        <button className="item" onClick={() => HandleSubmit()}> Submit </button>
        <Link a href="/crossroad"><div className="item">back to crossroad</div></Link>
    </div>
  )
}
