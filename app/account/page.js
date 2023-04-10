"use client"
import './account.css'
import { useEffect, useContext } from 'react';
import { userContext } from "../../Components/contextUser";
import { logoutUser } from "../../Components/logout";
import { useRouter } from 'next/navigation';
export default function account() {
    const {user, setUser} = useContext(userContext);
    const router = useRouter()

    const HandleLogout = () => {
        logoutUser()
        router.push("/login")
    }
    const resetUser = () => {
        setUser({
            currency: 1000,
            email: user.email,
            name: user.name
        } )
    }
    const HandleGuestButton = () => {
        if(user?.email === "Guest has no email") return <button onClick={() => resetUser()}>Add currency as Guest + 1000</button>;
        else return
    }

    if(user) return (
        <div className='container'>
            <div className='item'>{user?.name}</div>
            <div className='item'>{user?.email}</div>
            <div className='item'>{user?.currency}</div>
            <button onClick={() => HandleLogout()}>logout</button>
            {HandleGuestButton()}
                
        </div>
    )
    else{
        return(
        <div className='container'> 
            <div className='item'>No current user connected</div>
            <button onClick={() => router.push("/login")}>Go log in</button>
        </div>
        )
    }
}