"use client"
import "./crossroad.css"
import Link from "next/link"
export default function Page(){
    return (
    <div className="mainContainer">
        <div className="leftContainer">
        <Link a href="/login"><div className="blackButton">Přihlásit se</div></Link>
        </div>
        <div className="rightContainer">
        <Link a href="/register"><div className="whiteButton">Zaregistrovat se</div></Link>
        </div>
    </div>
    )
}