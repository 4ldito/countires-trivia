import useNewGame from '../../hooks/useNewGame'
import Button from '../Buttons/Button'

const Game = ({ setRender, user }) => {
  const { game } = useNewGame(user)
  console.log(game)
  return (
    <section>
      <Button onClick={() => setRender('home')} text='Back' />
      <h2>Game</h2>

    </section>
  )
}

export default Game
