import { useState } from "react"


export default function Score({t}){
    let [count,counter]=useState(0);
    let [message,updatemessage]=useState('');

    const increment=()=>{
        counter(()=>{
            if(count>=t-1){
                updatemessage(
                    ()=>{
                        return 'Winner';
                    }
                );

                return t;

            }else{
                return count+1;
            }
        })
        
    }

    return (
        <li>
            Player : {count} <button onClick={increment}>+1</button> {message}
        </li>
    )
}