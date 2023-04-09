import React from 'react'

export function audioStartSpinning() {
  const audio = new Audio("./spinfinal.mp3")
  audio.play()
}
export function audioWin(){
  const audio = new Audio("./win.mp3")
  audio.play()
}
export function audioLose(){
  const audio = new Audio("./lose.mp3")
  audio.play()
}
export function audioSlots(){
  const audio = new Audio("./slotmachine.mp3")
  audio.play()
}