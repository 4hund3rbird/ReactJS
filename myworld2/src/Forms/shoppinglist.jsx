import { useState } from "react";
import ShoppingListForm from "./shoppinglistform";

export default function ShoppingList(){
    let total_items=4;
    let [items,updateitems]=useState([
        {id:1, product:"Banana", qty:12},
        {id:2, product:"Apple", qty:6},
        {id:3, product:"Mango", qty:12},
        {id:4, product:"Chicku", qty:18}
    ]);

    function additem(item){
        total_items+=1;
        console.log(total_items)
        updateitems((olditems)=>{
            return[...olditems,{...item, id:total_items}];
        })

    }

    return(
        <div className="ShoppingList">
        <h1>-: Shopping List :-</h1>
        <ul>
            {items.map((e)=>(<li key={e.id}>{e.product} - {e.qty}</li>))}
        </ul>

        <ShoppingListForm newitem={additem}/>
        </div>
    )
}