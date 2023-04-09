import React from 'react'

export function audioStartSpinning() {
  const spinAudio = new Audio("./spinfinal.mp3")
  spinAudio.play()
}
export function audioWin(){
  const spinAudio = new Audio("./win.mp3")
  spinAudio.play()
}
export function audioLose(){
  const spinAudio = new Audio("./lose.mp3")
  spinAudio.play()
}