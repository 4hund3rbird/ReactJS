import { useState } from "react"

export default function Slots(){
    let s1=['🏀','🏈','🏉','🏐','🥎','⚽','⚾'];

    let [p1,setp1]=useState(Math.floor(Math.random()*s1.length))
    let [p2,setp2]=useState(Math.floor(Math.random()*s1.length))
    let [p3,setp3]=useState(Math.floor(Math.random()*s1.length))

    let pick1=s1[p1]
    let pick2=s1[p2]
    let pick3=s1[p3]



    let slotlist=[pick1,pick2,pick3]
    let message=(pick1===pick2 && pick2===pick3 ? "You Win":"You Lose")
    let colors=(message=="You Win"?'green':'red');
    
    function update(){
        setp1(p1=Math.floor(Math.random()*s1.length))
        setp2(p2=Math.floor(Math.random()*s1.length))
        setp3(p3=Math.floor(Math.random()*s1.length))
    }

    return(
        <>
        <h1>{slotlist}</h1>
        <h1 style={{color:colors}}>{message}</h1>
        <button onClick={update}>Push!!</button>
        </>
    )
}