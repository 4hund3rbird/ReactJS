import { useState } from "react"

export default function ShoppingListForm({newitem}){
    let [details,updatedetails]=useState({product:'',qty:0})
    
    function changeHandeler(evt){
        updatedetails((olddetails)=>{
            return{
                ...olddetails,
                [evt.target.name]:evt.target.value
            }
        })
    }
    
    function additmetolist(evt){
        evt.preventDefault();
        newitem(details);
    }
    
    return(
        <>
  
        <form onSubmit={(e)=>{additmetolist(e)}}>
            <label htmlFor="product">Product: </label>
            <input
                name="product"
                type="text"
                onChange={changeHandeler}
                
                />
            <label htmlFor="qty"> Quantity: </label>
            <input
                name="qty"
                type="number"
                onChange={changeHandeler}
            />

            <button>Add Item</button>
        </form>
        </>
    )
}