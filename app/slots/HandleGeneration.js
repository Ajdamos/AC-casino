"use client"
import "./slots.css"
import Image from "next/image";
import { useState } from "react";
export function HandleGeneration(IMAGES) {
        let temp = []
        let lastNine = []
        for(let i = 0; i < 72; i++) temp.push(<Image className="slotsitem " src={IMAGES[Math.floor(Math.random() * 9)]} alt="pics" width="198" height="198"/>)
        for(let j = 0; j < 9; j++) {
            temp.push(temp[j])
            lastNine.push(temp[j])
        }
        return {bigArray: temp,lastNine: lastNine}
}


