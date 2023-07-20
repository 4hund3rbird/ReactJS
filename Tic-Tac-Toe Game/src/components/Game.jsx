import Square from "./Square";
import '../styles/Square.css'
import Board from "./Board";

function Game(){
   
    return(
        <>
        <div className="master">
            <div className="bound">
        <h1 className="title">Tic-Tac-Toe Game in React</h1>
           <Board/>

        </div>
        </div>
        </>
    )
}

export default Game;