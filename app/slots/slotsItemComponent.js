"use client"
import React from 'react'
import "./slots.css"
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import { HandleGeneration } from './HandleGeneration'
const IMAGES = [
    "/slotsIcons/slotsHeart.png",
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
  const [finalArray, setFinalArray] = useState([])
  const [animation, setAnimation] = useState("")
    useEffect(() => {
        setFinalArray(HandleGeneration(IMAGES))
    }, [])

  function HandleButtonSpin(newGeneratedArray) {    
    setFinalArray(newGeneratedArray)
    setAnimation("animationitem")
    setTimeout(() => {
      setAnimation("")
    }, 4000)
  }
  function getFinalCombination(){
    if(finalArray.lastNine){
      return finalArray.lastNine.map(item => {
        return item.props.src.substring(17, item.props.src.length - 4)
      })}
    else return
  }
  function HandleButtonDisable() {
    if (animation === "animationitem") return true
    else return false
  }

  
  return (
    <div classname="bigcontainer">
    <div className={animation}>
        {finalArray.bigArray}
    </div>
    <button disabled={HandleButtonDisable()} className='spinbutton' onClick={() => HandleButtonSpin(HandleGeneration(IMAGES))} />
    </div>
  )
}
