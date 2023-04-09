"use client"
import './account.css'
import { useEffect, useContext } from 'react';
import { userContext } from "../../Components/contextUser";
import { logoutUser } from "../../Components/logout";
import { useRouter } from 'next/navigation';
export default function account() {
    const {user} = useContext(userContext);
    const router = useRouter()
    useEffect(() => {
        setTimeout(()=> {
            if(!user) router.push("/login")
        }, 1000)
        
    }, [])

    const HandleLogout = () => {
        logoutUser()
        router.push("/login")
    }
    return (
        <div className='container'>
            <div className='item'>{user?.name}</div>
            <div className='item'>{user?.email}</div>
            <div className='item'>{user?.currency}</div>
            <button onClick={() => HandleLogout()}>logout</button>
        </div>
    )
}