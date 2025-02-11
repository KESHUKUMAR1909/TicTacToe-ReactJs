import { useState } from "react";
import Card from "../Card/Card"
import isWinner from "../../Helper/isWinner"
import "./Grid.css"
function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); 
    const [turn , setTurn] = useState(true);
    const [winner , setWinner] = useState(null);
    function onPlay(index){
        if(turn===true){
            board[index] ="o";
        }else{
            board[index] = "x";
        }
      
        const win = isWinner(board, turn?"o":"x");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn)
    }
    function reset(){
        setBoard(Array(numberOfCards).fill(""))
        setTurn(true)
        setWinner(null);
    }
    const isTie = board.every(cell => cell !== "") && !winner;


    return(
        <>    
            <div className="grid-Wrapper">
            {winner && (
                <h1 className="turn-highlight">
                    Winner is {winner} 
                    <button className="reset" onClick={reset}>Reset Game</button>
                </h1>
            )}
            {isTie && (
                <h1 className="turn-highlight">
                    Game Tie 
                    <button className="reset" onClick={reset}>Reset Game</button>
                </h1>
            )}
            {!winner && !isTie && (
                <h1 className="turn-highlight">Current Turn: {turn ? "o" : "x"}</h1>
            )}
        </div>
        <div className="grid">
            {board.map((value,idx)=>
            <Card  key={idx} icon={value} onPlay={onPlay} index={idx} gameEnd={winner?true:false}/>)
            }
        </div>
        </>
    )


}
export default Grid;