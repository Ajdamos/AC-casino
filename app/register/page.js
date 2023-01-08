"use client";
import { useState } from "react";
import { addUser } from "../../Components/addUser";
import Link from "next/link";

import "./register.css"

export default function register() {

    const [information, setInformation]  = useState({name: "", email: "", password: ""})

    const HandleSubmit = () => {
      if (information.password.length < 8) alert("Heslo je moc krátké")
      else if (!new RegExp(".*").test(information.email)) alert("špatně zadaný email")
      else if(information.name < 4 || information.name > 15 ) alert("jmeno je kratky nebo dlouhy")
      addUser(information.name, information.email, information.password);
      setInformation({name: "", email: "".toLowerCase, password: ""});
    }
    return (
    <div className="container">
      <h2>Register</h2>
        <input className="item" placeholder='Name or Nickname' onChange={(e) => setInformation(information => ({...information, name: e.target.value}))} value={information.name}/>
        <input className="item" placeholder='Email' onChange={(e) => setInformation(information => ({...information, email: e.target.value}))} value={information.email}/>
        <input type="password" className="item" placeholder='Password' onChange={(e) => setInformation(information => ({...information, password: e.target.value}))} value={information.password}/>
        <button className="item" onClick={() => HandleSubmit()}> Submit </button>
        <Link a href="crossroad"><div className="item">back to crossroad</div></Link>
    </div>
  )
}
