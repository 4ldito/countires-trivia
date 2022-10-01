import Button from '../Buttons/Button'
import Login from '../User/Login'

const HomeWithoutLogin = () => {
  return (
    <section className='flex flex-col items-center justify-between h-full'>
      <div className='text-center'>
        <h3>Welcome to World Trivia!</h3>
        <p>How much do you know about countries?</p>
      </div>
      <div className='flex gap-5'>
        <Button text='Play as guest' onClick={() => console.log('first')} />
        <Login />
        <Button text='Ranking' onClick={() => console.log('first')} />
      </div>
    </section>
  )
}

export default HomeWithoutLogin
