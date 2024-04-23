import { useState } from 'react'
import './App.css'
import PlayerComponent from './components/Player/PlayerComponent'
import GameBoardComponent from './components/GameBoard/GameBoardComponent'
import LogComponent from './components/LogComponent';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOverComponent from './components/GameOverComponent';


const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function deriveActivePlayer(gameTurns){

  let currentPlayer = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  
 // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
 // const [hasWinner, setHasWinner] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initalGameBoard.map((row) => [...row])];


   for(const turn of gameTurns){
      const {square,player} = turn;
      const {row,col} = square;

      gameBoard[row][col] = player;
   }

  let winner;

  for(const combination of WINNING_COMBINATIONS){

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function switchTurns(rowIndex,colIndex){

    //setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns)=>{

     const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns];

      return updatedTurns;

    });
  }

  function handleRematch(){
    setGameTurns([]);
  }

  return (
    <main>
    
     <div id='game-container'>

      <ol id='players' className='highlight-player'>
        
        <PlayerComponent name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
        <PlayerComponent name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
        
      </ol>
      {(winner || hasDraw) && <GameOverComponent winner={winner} onRematch={handleRematch}/>}
      <GameBoardComponent onSelectSquare={switchTurns} board={gameBoard} />
      <LogComponent turns={gameTurns} />

     </div>
    </main>
  )
}

export default App
