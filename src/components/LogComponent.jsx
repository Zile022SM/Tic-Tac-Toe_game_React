import React from 'react';

function LogComponent({turns}) {
  return (
     <ol id='log'>
        {
        turns.map((turn, index) =>
         
        <li key={`${turn.square.row}-${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>)

        }
     </ol>
  );
}

export default LogComponent;