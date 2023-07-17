import { useState } from 'react';
import '../styles/Square.css'
function Square(){

    let [c,update]=useState(true);

    function handleclick(){
        update(c=!c)
    }
    return(
        <>
        <div onClick={handleclick} id="Square">
            <h1>{c?'X':'O'}</h1>
        </div>
        </>
    )
}

export default Square;