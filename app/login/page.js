"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css"
import { loginUser } from "../../Components/loginUser";
import { addUser } from "../../Components/addUser";
import { userContext } from "../../Components/contextUser";
import { useContext } from "react";
import { useEffect } from "react";
export default function login() {
    const [pageState, setPageState] = useState("login")
    const [information, setInformation]  = useState({name: "", email: "", password: ""})
    const {user} = useContext(userContext);
    const router = useRouter()


    const HandleSubmitLogin = () => {
      loginUser(information.email.toLowerCase(), information.password);
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
      <div className="formcontainer">
        <h2>Login</h2>
        <input className="formitem blackx" placeholder='Email'  onChange={(e) => setInformation(information => ({...information, email: e.target.value}))} value={information.email}/>
        <input className="formitem blackx" type="password" placeholder='Password' onChange={(e) => setInformation(information => ({...information, password: e.target.value}))} value={information.password}/>
        <button className="formitem blackx" onClick={() => HandleSubmitLogin()}> Submit Login </button>
        <p onClick={() => setPageState("register")}>register</p>
    </div>
    )}

    else if(pageState === "register"){
    return (
    <div className="formcontainer">
      <h2 className="formitem">Register</h2>
        <input className="formitem blackx" placeholder='Name or Nickname' onChange={(e) => setInformation(information => ({...information, name: e.target.value}))} value={information.name}/>
        <input className="formitem blackx" placeholder='Email' onChange={(e) => setInformation(information => ({...information, email: e.target.value}))} value={information.email}/>
        <input className="formitem blackx" type="password" placeholder='Password' onChange={(e) => setInformation(information => ({...information, password: e.target.value}))} value={information.password}/>
        <button className="formitem" onClick={() => HandleSubmitRegister()}> Submit Register </button>
        <p className="formitem" onClick={() => setPageState("login")}>login</p>
    </div>
  )}
}
