import { useState } from "react"



export default function Card({id,name,price,rating}){
    let [heart,toggle]=useState(false)
    const toggleHeart=()=>toggle(!heart)
    return(
        
            <li key={id} className="Card">
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h2>{rating} ⭐</h2>
            <button onClick={toggleHeart}>{heart?'❤️':'🤍'}</button> 
            </li>
        
    )
}