import { useState } from "react"
import Dice from "./Dice"
import { list_sum } from "./Lucky7utils";
import './Lucky7all.css'


export default function Lucky7(){
    let no_of_dices=3;
    let winner=false;

    let [dicelist,Rolldice]=useState(new Array(no_of_dices).fill(0));
    let [Message,Updatemessage]=useState('Try Bro :)');

    const Roll=()=>{
        Rolldice((dicelist)=>{
            if(list_sum(dicelist)===7){
                Updatemessage(()=>"!!!Winner!!!")
                return [...dicelist];
            }else{
                return dicelist.map((e)=>{
                    return (Math.floor(Math.random()*6+1));
                })
            }
        })
    }

    const Reset=()=>{
        Rolldice(()=>new Array(no_of_dices).fill(0));
        Updatemessage(()=>"Try again bro :)");
    }

    return(
        <div className="board">
            <div id="title">
            <h1>Lucky7 Game</h1>
            -Roll dices until the sum becomes 7.
            </div>
            <h1>{Message}</h1>
            <Dice n={no_of_dices} nums={dicelist} iswinner={winner}/>

            <button onClick={Roll}>Roll Dices</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}