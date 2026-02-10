import './Game.css'
const Game = ({verificarLetra}) => {
  return (
    <div className='game'>
      <p className='point'> pontuação</p>
      <h1>Advinhe a palavra</h1>
      <h3 className='tip'>Dica: <span>dica...</span></h3>
      <div className='wordContainer'>
        <span className='letter'>A</span>
        <span className='blankSquare'></span>
      </div>

      <div className='letterContainer'>
        <p>Tente adivinhar a palavra</p>
        <form>
          <input type='text' name='letter' maxLength={"1"} required></input>
          <button>Jogar</button>
        </form>
      </div>
      <div className='letrasErradas'>
        <p>letras já utilizadas: </p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game