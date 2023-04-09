"use client";
import { db } from '../../Components/firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import {useEffect, useState} from 'react'
import Image from 'next/image'
import { useContext } from 'react';
import { userContext } from '../../Components/contextUser';
import './table.css'
import { audioStartSpinning, audioWin, audioLose } from '../../Components/audio';
export default function Table(){
    const {user, setUser} = useContext(userContext);
    const [money, setMoney] = useState("loading")
    
    useEffect(()=> {
        setMoney(user?.currency)
    }, [user])

    const [chosenValue, setChosenValue] = useState(10);
    const [pool, setPool]  = useState([]);
    const [buttonAccesibility, setButtonAccesibility] = useState(false)
    const red = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
    const black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
    const [animation, setAnimation] = useState("dot zero");


    const animations = [
        { ending: "dotAnimationEndingZero", final: "zero" },
        { ending: "dotAnimationEndingOne", final: "one" },
        { ending: "dotAnimationEndingTwo", final: "two" },
        { ending: "dotAnimationEndingThree", final: "three" },
        { ending: "dotAnimationEndingFour", final: "four" },
        { ending: "dotAnimationEndingFive", final: "five" },
        { ending: "dotAnimationEndingSix", final: "six" },
        { ending: "dotAnimationEndingSeven", final: "seven" },
        { ending: "dotAnimationEndingEight", final: "eight" },
        { ending: "dotAnimationEndingNine", final: "nine" },
        { ending: "dotAnimationEndingTen", final: "ten" },
        { ending: "dotAnimationEndingEleven", final: "eleven" },
        { ending: "dotAnimationEndingTwelve", final: "twelve" },
        { ending: "dotAnimationEndingThirteen", final: "thirteen" },
        { ending: "dotAnimationEndingFourteen", final: "fourteen" },
        { ending: "dotAnimationEndingFifteen", final: "fifteen" },
        { ending: "dotAnimationEndingSixteen", final: "sixteen" },
        { ending: "dotAnimationEndingSeventeen", final: "seventeen" },
        { ending: "dotAnimationEndingEighteen", final: "eighteen" },
        { ending: "dotAnimationEndingNineteen", final: "nineteen" },
        { ending: "dotAnimationEndingTwenty", final: "twenty" },
        { ending: "dotAnimationEndingTwentyone", final: "twentyone" },
        { ending: "dotAnimationEndingTwentytwo", final: "twentytwo" },
        { ending: "dotAnimationEndingTwentythree", final: "twentythree" },
        { ending: "dotAnimationEndingTwentyfour", final: "twentyfour" },
        { ending: "dotAnimationEndingTwentyfive", final: "twentyfive" },
        { ending: "dotAnimationEndingTwentysix", final: "twentysix" },
        { ending: "dotAnimationEndingTwentyseven", final: "twentyseven" },
        { ending: "dotAnimationEndingTwentyeight", final: "twentyeight" },
        { ending: "dotAnimationEndingTwentynine", final: "twentynine" },
        { ending: "dotAnimationEndingThirdy", final: "thirdy" },
        { ending: "dotAnimationEndingThirdyone", final: "thirdyone" },
        { ending: "dotAnimationEndingThirdytwo", final: "thirdytwo" },
        { ending: "dotAnimationEndingThirdythree", final: "thirdythree" },
        { ending: "dotAnimationEndingThirdyfour", final: "thirdyfour" },
        { ending: "dotAnimationEndingThirdyfive", final: "thirdyfive" },
        { ending: "dotAnimationEndingThirdysix", final: "thirdysix" },
    ]

    useEffect(()=> {
        console.log(pool)
    }, [pool])

    function HandleBorder(chosen, base){
        if(chosen === base) return "picture chosen"
        else return "picture"
    }
    function HandleValueChange(nextValue){
        setChosenValue(nextValue)
    }
    function HandleButtonAccesibility(expected){
        setButtonAccesibility(expected);
    }
    function HandleBet(tableNumber){
        if(money > chosenValue - 1 ){
            if(pool.find(item => item.id === tableNumber)){
                pool.find(item => item.id === tableNumber).value += chosenValue
            }
            else setPool(pool => [...pool, {id: tableNumber, value: chosenValue}])
        
            setMoney(money - chosenValue)
        }
        else{
            alert("neni dost penez")
        }
    }
    function showCurrency(){
        if(user) return <div className='currency'>currency {money}</div>
        else return <div className='currency'>no user</div>
    }
    function HandleSpin(){
        if(pool.length !== 0){
            HandleButtonAccesibility(true);

            /// presne cislo trefa
            let winnerItem = Math.floor(Math.random() * 37);
            let tempSum = 0
            console.log(winnerItem)

            if(pool.find(item => item.id === winnerItem.toString())) {
                tempSum += pool.find(item => item.id === winnerItem.toString()).value * 35
                console.log('win right number')}
            ///red black
            if(pool.find(item => item.id === "red" && red.includes(winnerItem))) {
                tempSum += pool.find(item => item.id === "red").value * 2
                console.log("win red")}
            else if(pool.find(item => item.id === "black" &&  black.includes(winnerItem))){
                tempSum += pool.find(item => item.id === "black").value * 2
                console.log("win right color black")}
            ///1-18  19-36
            if(pool.find(item => item.id === "1-18") && winnerItem > 0 && winnerItem < 19){
                tempSum += pool.find(item => item.id === "1-18").value * 2
                console.log("win 1-18")} 
            else if(pool.find(item => item.id === "19-36") && winnerItem > 18) {
                tempSum += pool.find(item => item.id === "19-36").value * 2
                console.log("win 19-36")}
            ///odd even
            if(pool.find(item => item.id === "even" && winnerItem % 2 === 0 && winnerItem !== 0)){
                tempSum += pool.find(item => item.id === "even").value * 2
                console.log("even")}
            else if(pool.find(item => item.id === "odd" && winnerItem % 2 === 1 && winnerItem !== 0)){
                tempSum += pool.find(item => item.id === "odd").value * 2
                console.log("odd")}
            ///row 1 row 2 row 3
            if(pool.find(item => item.id === "row 1" && winnerItem % 3 === 0 && winnerItem !==0)) {
                tempSum += pool.find(item => item.id === "row 1").value * 3
                console.log("win row 1")}
            else if(pool.find(item => item.id === "row 2" && winnerItem % 3 === 2 && winnerItem !==0)) {
                tempSum += pool.find(item => item.id === "row 2").value * 3
                console.log("win row 2")}
            else if(pool.find(item => item.id === "row 3" && winnerItem % 3 === 1 && winnerItem !==0)) {
                tempSum += pool.find(item => item.id === "row 3").value * 3
                console.log("win row 3")}
            ///1-12 13-24 25-36
            if(pool.find(item => item.id === "1-12" && winnerItem > 0 && winnerItem < 13)) {
                tempSum += pool.find(item => item.id === "1-12").value * 3
                console.log("win 1-12")}
            else if(pool.find(item => item.id === "13-24" && winnerItem > 12 && winnerItem < 25)) {
                tempSum += pool.find(item => item.id === "13-24").value * 3
                console.log("win 13-24")}
            else if(pool.find(item => item.id === "25-36" && winnerItem > 24)) {
                tempSum += pool.find(item => item.id === "25-36").value * 3
                console.log("win 25-36")}
            /////
            
            setAnimation("dot dotAnimation animationActive")
            audioStartSpinning()
            setTimeout(() => {
                setAnimation("dot animationActive " + animations[winnerItem].ending)
                setTimeout(async () => {
                    if(tempSum > 0) audioWin()
                    else audioLose()
                    setMoney(money + tempSum)
                    if(user.email !== "Guest has no email"){
                    await setDoc(doc(db, "Users", user.email), {
                        name: user.name,
                        email: user.email,
                        currency: money + tempSum
                      });
                    }
                    setUser({
                        name: user.name,
                        email: user.email,
                        currency: money + tempSum
                    })
                    setPool([])
                    setAnimation("dot " + animations[winnerItem].final)
                    HandleButtonAccesibility(false);
                }, "2001")
            }, "8000")
  
            

        }
        
        else{
            alert("Nebyla ulozena zadna sazka")
            return 0
        }
    }

    function InnerTextView (id) {
        return pool.find(item => item.id === id)?.value
    }

    return (
    <div className='MainContainer'>
    <div className='left'>
    <div className="gridContainer">
        <div onClick={()=> HandleBet("0")} className="grid-item grid-zero">0 <p>{InnerTextView("0")}</p></div>
        <div onClick={()=> HandleBet("3")} className="grid-item red">3 <p>{InnerTextView("3")}</p></div>
        <div onClick={()=> HandleBet("6")} className="grid-item black">6 <p>{InnerTextView("6")}</p></div>
        <div onClick={()=> HandleBet("9")} className="grid-item red">9 <p>{InnerTextView("9")}</p></div>
        <div onClick={()=> HandleBet("12")} className="grid-item red">12 <p>{InnerTextView("12")}</p></div>
        <div onClick={()=> HandleBet("15")} className="grid-item black">15 <p>{InnerTextView("15")}</p></div>
        <div onClick={()=> HandleBet("18")} className="grid-item red">18 <p>{InnerTextView("18")}</p></div>
        <div onClick={()=> HandleBet("21")} className="grid-item red">21 <p>{InnerTextView("21")}</p></div>
        <div onClick={()=> HandleBet("24")} className="grid-item black">24 <p>{InnerTextView("24")}</p></div>
        <div onClick={()=> HandleBet("27")} className="grid-item red">27 <p>{InnerTextView("27")}</p></div>
        <div onClick={()=> HandleBet("30")} className="grid-item red">30 <p>{InnerTextView("30")}</p></div>
        <div onClick={()=> HandleBet("33")} className="grid-item black">33 <p>{InnerTextView("33")}</p></div>
        <div onClick={()=> HandleBet("36")} className="grid-item red">36 <p>{InnerTextView("36")}</p></div>
        <div onClick={()=> HandleBet("row 1")} className="grid-item">ROW <p>{InnerTextView("row 1")}</p></div>
        <div onClick={()=> HandleBet("2")} className="grid-item black">2 <p>{InnerTextView("2")}</p></div>
        <div onClick={()=> HandleBet("5")} className="grid-item red">5 <p>{InnerTextView("5")}</p></div>
        <div onClick={()=> HandleBet("8")} className="grid-item black">8 <p>{InnerTextView("8")}</p></div>
        <div onClick={()=> HandleBet("11")} className="grid-item black">11 <p>{InnerTextView("11")}</p></div>
        <div onClick={()=> HandleBet("14")} className="grid-item red">14 <p>{InnerTextView("14")}</p></div>
        <div onClick={()=> HandleBet("17")} className="grid-item black">17 <p>{InnerTextView("17")}</p></div>
        <div onClick={()=> HandleBet("20")} className="grid-item black">20 <p>{InnerTextView("20")}</p></div>
        <div onClick={()=> HandleBet("23")} className="grid-item red">23 <p>{InnerTextView("23")}</p></div>
        <div onClick={()=> HandleBet("26")} className="grid-item black">26 <p>{InnerTextView("26")}</p></div>
        <div onClick={()=> HandleBet("29")} className="grid-item black">29 <p>{InnerTextView("29")}</p></div>
        <div onClick={()=> HandleBet("32")} className="grid-item red">32 <p>{InnerTextView("32")}</p></div>
        <div onClick={()=> HandleBet("35")} className="grid-item black">35 <p>{InnerTextView("35")}</p></div>
        <div onClick={()=> HandleBet("row 2")} className="grid-item">ROW <p>{InnerTextView("row 2")}</p></div>
        <div onClick={()=> HandleBet("1")} className="grid-item red">1 <p>{InnerTextView("1")}</p></div>
        <div onClick={()=> HandleBet("4")} className="grid-item black">4 <p>{InnerTextView("4")}</p></div>
        <div onClick={()=> HandleBet("7")} className="grid-item red">7 <p>{InnerTextView("7")}</p></div>
        <div onClick={()=> HandleBet("10")} className="grid-item black">10 <p>{InnerTextView("10")}</p></div>
        <div onClick={()=> HandleBet("13")} className="grid-item black">13 <p>{InnerTextView("13")}</p></div>
        <div onClick={()=> HandleBet("16")} className="grid-item red">16 <p>{InnerTextView("16")}</p></div>
        <div onClick={()=> HandleBet("19")} className="grid-item red">19 <p>{InnerTextView("19")}</p></div>
        <div onClick={()=> HandleBet("22")} className="grid-item black">22 <p>{InnerTextView("22")}</p></div>
        <div onClick={()=> HandleBet("25")} className="grid-item red">25 <p>{InnerTextView("25")}</p></div>
        <div onClick={()=> HandleBet("28")} className="grid-item black">28 <p>{InnerTextView("28")}</p></div>
        <div onClick={()=> HandleBet("31")} className="grid-item black">31 <p>{InnerTextView("31")}</p></div>
        <div onClick={()=> HandleBet("34")} className="grid-item red">34 <p>{InnerTextView("34")}</p></div>
        <div onClick={()=> HandleBet("row 3")} className="grid-item">ROW<p>{InnerTextView("row 3")}</p></div>
        <div onClick={()=> HandleBet("1-12")} className="grid-item top-start">1-12 <p>{InnerTextView("1-12")}</p></div>
        <div onClick={()=> HandleBet("13-24")} className="grid-item top">13-24 <p>{InnerTextView("13-24")}</p></div>
        <div onClick={()=> HandleBet("25-36")} className="grid-item top">25-36 <p>{InnerTextView("25-36")}</p></div>
        <div onClick={()=> HandleBet("odd")} className='grid-item bot-start'>Odd<p>{InnerTextView("odd")}</p></div>
        <div onClick={()=> HandleBet("1-18")} className="grid-item bot">1-18 <p>{InnerTextView("1-18")}</p></div>
        <div onClick={()=> HandleBet("red")} className="grid-item bot red"><p>{InnerTextView("red")}</p></div>
        <div onClick={()=> HandleBet("black")} className="grid-item bot black"><p>{InnerTextView("black")}</p></div>
        <div onClick={()=> HandleBet("19-36")} className="grid-item bot">19-36 <p>{InnerTextView("19-36")}</p></div>
        <div onClick={()=> HandleBet("even")} className='grid-item bot'>Even<p></p>{InnerTextView("even")}</div>
    </div>
   
    
    <div className="token-container">
        {showCurrency()}
        <Image className={HandleBorder(chosenValue, 10)} onClick={()=>HandleValueChange(10)} src="/chip-10.png" alt="chip-10" width="50" height="50"/> 
        <Image className={HandleBorder(chosenValue, 25)} onClick={()=>HandleValueChange(25)} src="/chip-25.png" alt="chip-25" width="50" height="50"/> 
        <Image className={HandleBorder(chosenValue, 100)} onClick={()=>HandleValueChange(100)} src="/chip-100.png" alt="chip-100" width="50" height="50"/> 
        <Image className={HandleBorder(chosenValue, 250)} onClick={()=>HandleValueChange(250)} src="/chip-250.png" alt="chip-250" width="50" height="50"/> 
        <Image className={HandleBorder(chosenValue, 500)} onClick={()=>HandleValueChange(500)}  src="/chip-500.png" alt="chip-500" width="50" height="50"/> 
        <Image className={HandleBorder(chosenValue, money)} onClick={()=>HandleValueChange(money)}  src="/chip-allin.png" alt="chip-500" width="50" height="50"/> 
        <input className={HandleBorder(chosenValue, e => e.target.value) + " inputcustom"} onClick={e =>HandleValueChange(e.target.value)} width="80" heigth="50" placeholder='Custom value'/>
    </div>
    <button disabled={buttonAccesibility} className="spinButton" onClick={() => HandleSpin()}>Spin</button>
    </div>
    <div className="right">
    <div className="wheel" >
        <div className={animation}>
            <div className="dot-start"></div>
            <div className="dot-end"></div>
        </div>
    </div>
    </div>
    </div>
    )
}