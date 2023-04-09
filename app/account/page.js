"use client"
import './account.css'
import { useEffect, useContext } from 'react';
import { userContext } from "../../Components/contextUser";
import { logoutUser } from "../../Components/logout";
import { useRouter } from 'next/navigation';
export default function account() {
    const {user} = useContext(userContext);
    const router = useRouter()

    const HandleLogout = () => {
        logoutUser()
        router.push("/login")
    }
    if(user) return (
        <div className='container'>
            <div className='item'>{user?.name}</div>
            <div className='item'>{user?.email}</div>
            <div className='item'>{user?.currency}</div>
            <button onClick={() => HandleLogout()}>logout</button>
        </div>
    )
    else{
        return(
        <div className='container'> 
            <div>No current user connected</div>
            <button onClick={() => router.push("/login")}>Go log in</button>
        </div>
        )
    }
}