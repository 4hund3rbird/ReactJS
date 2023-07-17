import Square from "./Square";
import '../styles/Square.css'
import { useState } from "react";

function Board(){

    let [state,updatestate]=useState(new Array(3).fill([-1,-1,-1]));
    let [turn,updateturn]=useState(true);
    let [winner,updatewinner]=useState(" ");

    function findwinner(){
        
    }

    let renvalue=turn?0:1;
    const handleupdate=(i,j)=>{
        updatestate((c)=>{
            return c.map((e,index)=>{
                if(index==i){
                    return e.map((m,jindex)=>{
                        if(jindex==j){
                            if(m!=0 && m!=1){
                                updateturn(!turn);
                                return renvalue;
                            }
                        }
                        return m;
                    })
                }
                return e;
            })
        })


    }

    const Reset=()=>{
        updatestate(()=>{
            return new Array(3).fill([-1,-1,-1]);
        })

        updateturn(true);
    }

    let squares=[];
    let rows=[];
    for(let i=0;i<3;i++){
        rows=[];
        for(let j=0;j<3;j++){
            rows.push(<Square index={i} jindex={j} value={state} fun={(ix,jx)=>{handleupdate(ix,jx)}}/>);
        }
        squares.push(rows);
    };
    
        return(
        <>
            <h1>{turn?"Player - O":"Player - X"}</h1>
            <div className="board">
                {squares}
            </div>

            <button onClick={Reset} className="reset">Reset</button>
        </>
    )
}

export default Board;