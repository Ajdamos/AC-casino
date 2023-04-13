"use client"
import React from 'react'
import "./slots.css"
import { db } from '../../Components/firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react';
import { userContext } from '../../Components/contextUser';
import { audioLose, audioWin, audioSlots } from '../../Components/audio';

const IMAGES = [
    "/slotsIcons/slotsHeart.png",
    "/slotsIcons/slotsCherries.png",
    "/slotsIcons/slotsDiamond.png",
    "/slotsIcons/slotsDuck.png",
    "/slotsIcons/slotsLemon.png",
    "/slotsIcons/slotsMelon.png",
    "/slotsIcons/slotsOrange.png",
    "/slotsIcons/slotsSeven.png",
]
export default function SlotsItemComponent() {  
  const [border, setBorder] = useState("10")
  const [cross, setCross] = useState("")
  const [animation, setAnimation] = useState("")
  const [items, setItems] = useState([<div className='beforespin'> spin me</div>])
  const [loading, setLoading] = useState(false)
  
  const {user, setUser} = useContext(userContext);
  const [money, setMoney] = useState("loading")
  const [currentBet, setCurrentBet] = useState(10)
  useEffect(()=> {
      setMoney(user?.currency)
  }, [user])

  useEffect(() => {
    if (items[80]){
      setTimeout(() => {
        HandleWinRow(items)
      }, 3000)
      
    }

  }, [items])
  
  function HandleWinRow(arr){
    let tempCross = ""
    let tempWinMoney = 0
    if(arr[72].props.src === arr[76].props.src && arr[76].props.src === arr[80].props.src){
      console.log("toptoright")
      tempCross += "toptoright "
      tempWinMoney += currentBet
    }
    if (arr[78].props.src === arr[76].props.src && arr[76].props.src === arr[74].props.src){
      console.log("bottoright")
      tempCross += "bottoright "
      tempWinMoney += currentBet
    } 
    if(arr[72].props.src === arr[73].props.src && arr[74].props.src === arr[73].props.src){
      console.log("top")
      tempCross += "top "
      tempWinMoney += currentBet
    }
    if(arr[75].props.src === arr[76].props.src && arr[77].props.src === arr[76].props.src){
      console.log("mid")
      tempCross += "mid "
      tempWinMoney += currentBet
    }
    if(arr[78].props.src === arr[79].props.src && arr[80].props.src === arr[79].props.src){
      console.log("win bot")
      tempCross += "bot "
      tempWinMoney += currentBet
    }
    setMoney(old => old + (tempWinMoney * 6) - currentBet)
    setCross(tempCross)
    setTimeout(async () => {
      if(!tempWinMoney) audioLose()
      else audioWin()
      if(user.email !== "Guest has no email"){
      await setDoc(doc(db, "Users", user.email), {
        name: user.name,
        email: user.email,
        currency: money + (tempWinMoney * 6) - currentBet
      });
      }
      setUser({
        name: user.name,
        email: user.email,
        currency: money + (tempWinMoney * 6) - currentBet
    })
      
    }, 100)
  }

  function HandleResultSigns(which){
    let tempArr = cross.split(' ')
    if(tempArr.includes(which)) return false
    else return true
  }
  function HandleBorder(which){
    if(border === which) return "token chosentoken"
    else return "token"
  }
  function setBorderBet(num) {
    setBorder(num.toString())
    setCurrentBet(num)
  }
  function showCurrency(){
    if(user) return <div className='currency'>currency {money}</div>
    else return <div className='currency'>no user</div>
}
  return (
    <div>
      <div className={animation}>{items}</div>
      
    
    <button disabled={loading} className='spinbutton' onClick={() => {
      if(money < currentBet) return alert("Neni dost penez")
      if(!user) return alert("no user logged")
      setLoading(true)
      setCross("")
      setAnimation("animationitem")
      audioSlots()
        setItems(old => {
          let temp = []
          for (let i=9; i > 0; i--){
            temp.push(old[old.length - i])
          }
          for(let j = 0; j < 72; j++){
            temp.push(<Image className="slotsitem" src={IMAGES[Math.floor(Math.random() * 2)]} alt={j} width="198" height="198"/>)
          }
          return temp
        
        }) 
        setTimeout(() => {
          setAnimation("endofanimation")
          setLoading(false)
        }, 3000)
        
    }}> Spin me :]</button>

    <div className="tokencontainer">
    {showCurrency()}
    
        <Image className={HandleBorder("10")} onClick={() => setBorderBet(10)} src="/chip-10.png" alt="chip-10" width="50" height="50"/> 
        <Image className={HandleBorder("25")} onClick={() => setBorderBet(25)} src="/chip-25.png" alt="chip-25" width="50" height="50"/> 
        <Image className={HandleBorder("100")} onClick={() => setBorderBet(100)} src="/chip-100.png" alt="chip-100" width="50" height="50"/> 
        <Image className={HandleBorder("250")} onClick={() => setBorderBet(250)} src="/chip-250.png" alt="chip-250" width="50" height="50"/> 
        <Image className={HandleBorder("500")} onClick={() => setBorderBet(500)} src="/chip-500.png" alt="chip-500" width="50" height="50"/> 
    </div>

    <div hidden={HandleResultSigns("mid")} className='greenline middle'></div>
    <div hidden={HandleResultSigns("top")} className='greenline top'></div>
    <div hidden={HandleResultSigns("bot")} className='greenline bot'></div>
    <div hidden={HandleResultSigns("toptoright")} className='greenline middle toptoright'></div>
    <div hidden={HandleResultSigns("bottoright")} className='greenline middle bottoright'></div>
    </div>
  )
}


// const [finalArray, setFinalArray] = useState([])
// const [animation, setAnimation] = useState("")
//   useEffect(() => {
//       setFinalArray(HandleGeneration(IMAGES))
//   }, [])

// function HandleButtonSpin(newGeneratedArray) {    
//   setFinalArray(newGeneratedArray)
//   setAnimation("animationitem")
//   setTimeout(() => {
//     console.log(finalArray)
//     console.log(getFinalCombination())
//     setAnimation("")
//   }, 4000)
// }
// function getFinalCombination(){
//   if(finalArray.lastNine){
//     return finalArray.lastNine.map(item => {
//       return item.props.src.substring(17, item.props.src.length - 4)
//     })}
//   else return
// }
// function getResults(inputArray) {
//   for(let i=0; i < 3; i++){
//     if(inputArray[i] === inputArray[i + 6] && inputArray[i + 3] === inputArray[6]) return "line"
//   }
  
//   return true
// }
// function HandleButtonDisable() {
//   if (animation === "animationitem") return true
//   else return false
// }
