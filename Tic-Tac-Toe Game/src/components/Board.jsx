import Square from "./Square";
import '../styles/Square.css'
import { useState,useEffect } from "react";


function Board(){

    let [state,updatestate]=useState(new Array(3).fill([-1,-1,-1]));
    let [turn,updateturn]=useState(true);
    let [winner,updatewinner]=useState(false);

    useEffect(() => {
        findWinner();
      }, [state,turn]);
    

    let renvalue=turn?0:1;
    const handleupdate=(i,j)=>{
        if(!winner){
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
        findWinner();
       
        

    }

    const Reset=()=>{
        updatestate(()=>{
            return new Array(3).fill([-1,-1,-1]);
        })

        updateturn(true);
        updatewinner(false);
    }

    let squares=[];
    let rows=[];
    for(let i=0;i<3;i++){
        rows=[];
        for(let j=0;j<3;j++){
            rows.push(<Square index={i} jindex={j} value={state} fun={(ix,jx)=>{handleupdate(ix,jx);}}/>);
        }
        squares.push(rows);
    };

    const findWinner=()=>{
        for(let i=0;i<3;i++){
            if((state[i][0]!=-1 && state[i][0]==state[i][1])&&state[i][1]==state[i][2]){
                updatewinner(true);
             
            }
            else if((state[0][i]!=-1 && state[0][i]==state[1][i])&& state[1][i]==state[2][i]){
                updatewinner(true);
               
            }
            else if((state[0][0]!=-1 && state[0][0]==state[1][1])&& state[1][1]==state[2][2]){
                updatewinner(true);
                
            }
            else if((state[0][2]!=-1 && state[0][2]==state[1][1])&& state[1][1]==state[2][0]){
                updatewinner(true);
                
            }

        }
        return false;
    }
        let message="";
        
        if(!winner){
            message=turn?"Player - O":"Player - X";
        }else{
            message=turn?"Winner - X":"Winner - O";
        }
        


        return(
        <>
           
            <div className="container">
           
            <h1 className="button-wrap">{message}</h1>
       
            <div className="board">
                {squares}
            </div>
            <div className="button-wrap">
            <button onClick={Reset} className="reset">Reset</button>
            </div>
            </div>
        </>

    )
}

export default Board;