import Button from '../Buttons/Button'
import Login from '../User/Login'

const HomeWithoutLogin = ({ setRender }) => {
  return (
    <section className='flex flex-col items-center justify-between h-full'>
      <div className='text-center'>
        <h3>Welcome to World Trivia!</h3>
        <p>How much do you know about countries?</p>
      </div>
      <div className='flex gap-5'>
        <Button color='secondary' text='Ranking' onClick={() => setRender('ranking')} />
        <Button color='secondary' text='Play as guest' onClick={() => setRender('game')} />
        <Login />
      </div>
    </section>
  )
}

export default HomeWithoutLogin
