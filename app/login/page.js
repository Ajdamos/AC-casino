"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css"
import { loginUser } from "../../Components/loginUser";
import { addUser } from "../../Components/addUser";

export default function login() {
    const [pageState, setPageState] = useState("login")
    const [information, setInformation]  = useState({name: "", email: "", password: ""})
    const router = useRouter()

    const HandleSubmitLogin = () => {
      loginUser(information.email.toLowerCase(), information.password);
      router.push('/account')
    }

    const HandleSubmitRegister = async () => {
      if (information.password.length < 8) alert("Heslo je moc krátké")
      else if (!new RegExp(".*").test(information.email)) alert("špatně zadaný email")
      else if(information.name < 4 || information.name > 60 ) alert("jmeno je kratky nebo dlouhy")
      await addUser(information.name, information.email.toLowerCase(), information.password);
      loginUser(information.email.toLowerCase(), information.password);
      router.push('/account')
    }

    if(pageState === "login"){
      return (
      <div className="container">
        <h2>Login</h2>
        <input className="item black" placeholder='Email'  onChange={(e) => setInformation(information => ({...information, email: e.target.value}))} value={information.email}/>
        <input className="item black" type="password" placeholder='Password' onChange={(e) => setInformation(information => ({...information, password: e.target.value}))} value={information.password}/>
        <button className="item black" onClick={() => HandleSubmitLogin()}> Submit Login </button>
        <p onClick={() => setPageState("register")}>register</p>
    </div>
    )}

    else if(pageState === "register"){
    return (
    <div className="container">
      <h2 className="item">Register</h2>
        <input className="item black" placeholder='Name or Nickname' onChange={(e) => setInformation(information => ({...information, name: e.target.value}))} value={information.name}/>
        <input className="item black" placeholder='Email' onChange={(e) => setInformation(information => ({...information, email: e.target.value}))} value={information.email}/>
        <input className="item black" type="password" placeholder='Password' onChange={(e) => setInformation(information => ({...information, password: e.target.value}))} value={information.password}/>
        <button className="item" onClick={() => HandleSubmitRegister()}> Submit Register </button>
        <p className="item" onClick={() => setPageState("login")}>login</p>
    </div>
  )}
}
