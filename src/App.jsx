import { useState } from 'react'
import './App.css'
import PlayerComponent from './components/Player/PlayerComponent'
import GameBoardComponent from './components/GameBoard/GameBoardComponent'

function App() {
  

  return (
    <main>
    
     <div id='game-container'>

      <ol id='players'>
        
        <PlayerComponent name='Player 1' symbol='X' />
        <PlayerComponent name='Player 2' symbol='O' />
        
      </ol>
      <GameBoardComponent />
      GAME BOARD
     </div>
    </main>
  )
}

export default App
