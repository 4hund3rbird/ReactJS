import './Propertylist.css'
import { useState } from 'react'
import Card from './Propertylistcard'

export default function Propertylist({properties}){
   

    let list=properties.map(e=><Card id={e.id} name={e.name} price={e.price} rating={e.rating}/>)
    return(
        <>
        <ul className="Container">
            {list}
        </ul>
        </>
    )
}