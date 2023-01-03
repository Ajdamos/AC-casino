import Link from "next/link"
import "./mainpage.css"
export default function Page(){
    return (
    <div className="mainContainer">
        <div className="leftContainer">
            <div className="blackButton">Přihlásit se</div>
        </div>
        <div className="rightContainer">
            <div className="whiteButton"><Link a href="/register">Zaregistrovat se</Link></div>
        </div>
    </div>
    )
}