"use client"
import React from 'react'
import "./slots.css"
import SlotsItemComponent from './slotsItemComponent'
export default function Slots() {


  return (
    <div className='container'>
        {SlotsItemComponent()}
    </div> 
  )
}
