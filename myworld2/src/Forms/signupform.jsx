import { useState } from "react";

function Signupform(){

    let [User,ChangeUser]=useState({username:'',password:''});
    
    const Update=(evt)=>{
        const field=evt.target.name;
        const value=evt.target.value;
        
        ChangeUser((current)=>{
            return {
                ...current,
                [field]:value
            }
        })
    }

    return(
        <>

        <label htmlFor="user">Enter Username here: </label>
        <input 
            type="text" 
            placeholder="Username" 
            value={User.username} 
            onChange={Update}
            id="user"
            name="username"

            />
        <label htmlFor="pass">Enter password here: </label>
        <input 
            type="password" 
            placeholder="password" 
            value={User.password} 
            onChange={Update}
            id="pass"
            name="password"

            />
        <button onClick={()=>{console.log(User.username,User.password)}}>Submit</button>
        </>
    )
}

export default Signupform;