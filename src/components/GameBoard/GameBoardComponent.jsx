import { useState } from 'react';

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoardComponent({onSelectSquare,activePlayerSymbol}) {

  const [gameBoard, setGameBoard] = useState(initalGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard)=>{
        const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
        updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
        return updatedGameBoard;
    });

    onSelectSquare();
  }

  return (
     <ol id='game-board'>
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
     </ol>
  );
}


export default GameBoardComponent;