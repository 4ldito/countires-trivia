import React from 'react'

const Home = ({ user }) => {
  return (
    <div className='mx-4'>
      <p>{user.nickname}</p>
    </div>
  )
}

export default Home
