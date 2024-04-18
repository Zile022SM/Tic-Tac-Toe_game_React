import React, { useState } from 'react';

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoardComponent() {

  return (
     <ol id='game-board'>
        {initalGameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, cellIndex) => (
                <li key={cellIndex}><button>{playerSymbol}</button></li>
              ))}
            </ol>
          </li>
        ))}
     </ol>
  );
}

export default GameBoardComponent;