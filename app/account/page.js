"use client"
import './account.css'
import { useContext } from "react";
import { useEffect } from 'react';
import { userContext } from "../../Components/contextUser";
import { logoutUser } from "../../Components/logout";
import { useRouter } from 'next/navigation';
import Link from "next/link";
export default function account() {
    const {user} = useContext(userContext);
    const router = useRouter()



    const HandleLogout = () => {
        logoutUser()
        router.push("/login")
    }
    if(user){
    return (
        <div className='container'>
            <h1>{user?.name}</h1>
            <h2>{user?.email}</h2>
            <h3>{user?.currency}</h3>
            <button onClick={() => HandleLogout()}>logout</button>
        </div>
    )
    }
    else{
    return(
        <div className='container'>
            <h3>No user logged in</h3>
            <Link a href="/login"><p>log in</p></Link>
        </div>
        )

    }
}