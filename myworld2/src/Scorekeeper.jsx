import { v4 } from "uuid";
import Score from "./Score"
import { useState } from "react";
export default function ScoreKeeper({players,target=10}){
    let p_list=[];
    for(let i=0;i<players;i++){
        p_list.push(<Score key={v4()} t={target}/>)
    }
    let [list,reset]=useState(p_list);

    const Resetbutton=()=>{
        reset(()=>{
            return list.map(e=>{
                return <Score key={v4()} t={target}/> ;
            });
        });
    }

    return (
        <>
        <ul>
            {list}
        </ul>
        <button onClick={Resetbutton}>Reset</button>
        </>

    )
}