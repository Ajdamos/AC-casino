"use client"
import './account.css'

import { useContext } from "react";
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
            <div className='item'>{user?.name}</div>
            <div className='item'>{user?.email}</div>
            <div className='item'>{user?.currency}</div>
            <button onClick={() => HandleLogout()}>logout</button>
        </div>
    )
    }
    else{
    router.push("/login")
    return(
        <div className='container'>
            <div className='item'>No user logged in</div>
            <Link a href="/login"><div>log in</div></Link>
        </div>
        )

    }
}