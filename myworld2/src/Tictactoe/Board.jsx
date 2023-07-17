import Square from "./Square";
import './Gameall.css'
import { useState } from "react";
import { v4 } from "uuid";

export default function Board(){
    let states=new Array(9).fill(0);
    let [values,updatesates]=useState(states);

    const update=(id)=>{
        updatesates((oldstates)=>{
            return oldstates.map((e,idx)=>{
                return id==idx?1:e;
            })
        })
    }

    let squarelist=values.map((e,idx)=>{
        return e==0?<Square key={v4()}  updatevalue={()=>{update(idx)}} valuex={''}/>:<Square key={v4()}  valuex={'x'}/>;
    })
    
    return(
        <div className="Board">
           {squarelist}
        </div>
    )
}