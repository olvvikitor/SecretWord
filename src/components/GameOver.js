import './GameOver.css'
const GameOver = ({restartGame}) => {
  return (
    <div>
        <h1>GameOver</h1>
        <button onClick={restartGame}>
            Restart
        </button>
    </div>
  )
}

export default GameOver