import React from 'react'
import Button from './../Buttons/Button'

const Home = ({ user, setRender }) => {
  return (
    <div className='mx-4 text-center '>
      <h3>Welcome, {user.nickname}</h3>
      <Button onClick={() => setRender('game')}>Play</Button>
    </div>
  )
}

export default Home
