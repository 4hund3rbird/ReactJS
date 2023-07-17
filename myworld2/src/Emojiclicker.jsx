import { useState } from "react";
import { v4 as uuid } from "uuid";


export default function Emojis(){
    let emo=[{id:uuid(),emoji:'🌝'},{id:uuid(),emoji:'😽'},
             {id:uuid(),emoji:'🤯'},{id:uuid(),emoji:'☹️'},{id:uuid(),emoji:'😭'}];

    let [emoji,update]=useState([{id:uuid(),emoji:'😂'}])

    //Add one element to an array use [...oldarray,new element]
    function addemoji(){
        let r=Math.floor(Math.random()*emo.length)
        update((oldemoji)=>{
            return [...oldemoji,emo[r]];
        })
    }

    //Delete specific element from an array use .filter()
    function removeemoji(id){
        update((oldemoji)=>{
            return oldemoji.filter(e=>e.id!=id);
        })
    }


    // Update all elements from an array use .map()
    function makehearts(){
        update((oldemoji)=>{
            return oldemoji.map((e)=>{
                return {...e,emoji:'💖'}});
        })
    }
    return(
        <>
            <div>
            {emoji.map(e=><span onClick={()=>removeemoji(e.id)} key={e.id} style={{fontSize:'4rem'}}>{e.emoji}</span>)}
            </div>
            <button onClick={addemoji}>Add Emojis</button>
            <button onClick={makehearts}>Make Hearts</button>
           
        </>
    )
}