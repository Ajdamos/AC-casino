"use client";
import { useState } from "react";
export default function register() {

    const [information, setInformation]  = useState({name: "", email: "", password: ""})
    const HandleSubmit = () => {
      if (information.password.length < 8) alert("Heslo je moc krátké")
      else if (!new RegExp(".*").test(information.email)) alert("špatně zadaný email")
      else if(information.name < 4 || information.name > 15 ) alert("jmeno je kratky nebo dlouhy")
      else{setInformation({name: "", email: "", password: ""})}
    }
    return (
    <div>
        <input placeholder='Name or Nickname' onChange={(e) => setInformation(information => ({...information, name: e.target.value}))} value={information.name}/>
        <input placeholder='Email' onChange={(e) => setInformation(information => ({...information, email: e.target.value}))} value={information.email}/>
        <input placeholder='Password' onChange={(e) => setInformation(information => ({...information, password: e.target.value}))} value={information.password}/>
        <button onClick={() => HandleSubmit()}> Submit </button>
    </div>
  )
}
