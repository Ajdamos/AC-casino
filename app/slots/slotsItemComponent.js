"use client"
import React from 'react'
import "./slots.css"
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import { HandleGeneration } from './HandleGeneration'
const IMAGES = [
    <Image className='slotsitem' alt="Berries" src="/slotsIcons/slotsBerries.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Heart" src="/slotsIcons/slotsHeart.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Cherries" src="/slotsIcons/slotsCherries.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Diamond" src="/slotsIcons/slotsDiamond.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Duck" src="/slotsIcons/slotsDuck.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Lemon" src="/slotsIcons/slotsLemon.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Melon" src="/slotsIcons/slotsMelon.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Orange" src="/slotsIcons/slotsOrange.png" height="198" width="198"/>,
    <Image className='slotsitem' alt="Seven" src="/slotsIcons/slotsSeven.png" height="198" width="198"/>,
]
export default function SlotsItemComponent() {
    const [finalArray, setFinalArray] = useState([])
    useEffect(() => {
        setFinalArray(HandleGeneration([], IMAGES))
    }, [])


  return (
    <div onClick={() => setFinalArray(HandleGeneration(finalArray, IMAGES))}>
        {finalArray}
    </div>
  )
}
