import React from 'react'
import Logout from '../User/Logout'

const UserInfo = ({ user }) => {
  return (
    <div className='flex gap-4 items-center'>
      {user.nickname}
      <img className='w-12 rounded-full object-cover' src={user.picture} alt={`${user.nickname} picture`} />
      <Logout />
    </div>
  )
}

export default UserInfo
