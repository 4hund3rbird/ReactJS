import { useState } from "react"



export default function Scores(){
    let [scores,updateScores]=useState({p1:0,p2:0})

    function addp1(){
        updateScores(oldscore=>{
            return{...oldscore, p1:oldscore.p1+1}
        })
    }
    function addp2(){
        updateScores(oldscore=>{
            return{...oldscore, p2:oldscore.p2+1}
        })
    }
    return(
        <>
        <h1>P1 :{scores.p1}</h1>
        <h1>P2 :{scores.p2}</h1>
        <button onClick={addp1}>P1 +1</button>
        <button onClick={addp2}>P2 +1</button>
        </>
    )
}