import { v4 } from "uuid"
import Die from "./Die"
import './Lucky7all.css'

export default function Dice({n=3,nums=[2,6,6],iswinner}){
    let dices=[]
    for(let i=0;i<n;i++){
        dices.push(<Die key={v4()} face={nums[i]}/>)
    }
    
    return(
        <>
        {iswinner?<h1>Winner!!!</h1>:''}
        <div className="Dice">
            {dices}
        </div>
        </>
    )
}