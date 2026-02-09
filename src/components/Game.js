import './Game.css'
const Game = ({verificarLetra}) => {
  return (
    <div>
        <h1>GAME</h1>
        <button onClick={verificarLetra}>Finalizar Jogo</button>
    </div>
  )
}

export default Game