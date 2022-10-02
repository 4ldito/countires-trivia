import React from 'react'
import Button from './../Buttons/Button'

const Home = ({ user, setRender }) => {
  return (
    <div className='mx-4 text-center '>
      <h3>Welcome, {user.nickname}</h3>
      <div className='flex justify-center gap-6'>
        <Button color='secondary' onClick={() => setRender('ranking')}>Ranking</Button>
        <Button onClick={() => setRender('game')}>Start Game</Button>
      </div>
    </div>
  )
}

export default Home
