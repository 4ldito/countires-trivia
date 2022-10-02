import useNewGame from '../../hooks/useNewGame'
import Button from '../Buttons/Button'
import Loading from './../Loading/Loading'

const Game = ({ setRender, user }) => {
  const { game, isGameLoading } = useNewGame(user)
  if (isGameLoading) return <Loading />

  console.log(game)

  return (
    <section>
      <Button onClick={() => setRender('home')}>Back</Button>
      <h2>Game</h2>

    </section>
  )
}

export default Game
