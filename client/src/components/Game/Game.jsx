import useNewGame from '../../hooks/useNewGame'

import Loading from './../Loading/Loading'
import Options from './Options'
import QuestionFlag from './Question/QuestionFlag'

const Game = ({ setRender, user }) => {
  const { game, isGameLoading, setGame } = useNewGame(user)
  // console.log(game)

  if (isGameLoading) return <Loading />
  return (
    <section className='flex items-center justify-center relative'>
      <Options setRender={setRender} />
      <div className='flex self-center justify-center flex-col items-center gap-6'>
        <h3>Round {game.round + 1}</h3>
        <QuestionFlag game={game} setGame={setGame} question={game.questions[game.round]} />
      </div>
    </section>
  )
}

export default Game
