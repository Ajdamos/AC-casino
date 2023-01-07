"use client"

import { useContext } from "react";
import { userContext } from "../../Components/contextUser";
import { logoutUser } from "../../Components/logout";
import Link from "next/link";
export default function account() {
    const {user} = useContext(userContext);
    
    const HandleLogout = () => {
        logoutUser()
    }
    if(user){
    return (
        <div>
            <h1>{user?.name}</h1>
            <h2>{user?.email}</h2>
            <h3>{user?.currency}</h3>
            <button onClick={() => HandleLogout()}>logout</button>
        </div>
    )
    }
    else{
        
        return setTimeout(() => {
            return (
            <div>
                <h3></h3>
                <Link a href="/login"><p>log in</p></Link>
            </div>
        )}, 500
        )
    }
}