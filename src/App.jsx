import { useState } from 'react'
import './App.css'
import PlayerComponent from './components/Player/PlayerComponent'
import GameBoardComponent from './components/GameBoard/GameBoardComponent'

function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');


  function switchTurns(){

    setActivePlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));

  }

  return (
    <main>
    
     <div id='game-container'>

      <ol id='players' className='highlight-player'>
        
        <PlayerComponent name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
        <PlayerComponent name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
        
      </ol>
      <GameBoardComponent onSelectSquare={switchTurns} activePlayerSymbol={activePlayer} />
      GAME BOARD
     </div>
    </main>
  )
}

export default App
