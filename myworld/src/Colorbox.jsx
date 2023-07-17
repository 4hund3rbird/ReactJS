import { useState } from 'react';
import './Colorbox.css'


export default function Colorbox(){
    let [r,updater]=useState(Math.floor(Math.random()*255+1));
    let [g,updateg]=useState(Math.floor(Math.random()*255+1));
    let [b,updateb]=useState(Math.floor(Math.random()*255+1));

    const updatecolor=()=>{
        updater(Math.floor(Math.random()*255+1));
        updateg(Math.floor(Math.random()*255+1));
        updateb(Math.floor(Math.random()*255+1));
    }
    let color=`rgb(${r},${g},${b})`;

    return(
        <>
        <div className="Box" onClick={updatecolor} style={{backgroundColor:color}}></div>
        </>
    )
}