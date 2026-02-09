import logo from './logo.svg';

//CSS
import './App.css';

//React
import{useCallback, useEffect, useState} from "react"

//Data
import {wordList} from './data/word'


//Components
import { StartScreen } from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages =[
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name:"end"},
]

function App() {
  const[gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList)

  //Start game
  const startGame = () =>{
    setGameStage(stages[1].name)
  }
  //processamento de input de letra
  const verificarLetra = () =>{
    setGameStage(stages[2].name)
  }
  //Restart do jogo
  const restartGame = () =>{
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verificarLetra={verificarLetra}></Game>}
      {gameStage === 'end' && <GameOver restartGame={restartGame}></GameOver>}
    </div>
  );
}

export default App;
