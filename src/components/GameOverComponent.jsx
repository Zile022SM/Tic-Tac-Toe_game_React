import React from 'react';

function GameOverComponent({winner,onRematch}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>Winner: {winner}</p>}
      {!winner && <p>It's draw!</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOverComponent;