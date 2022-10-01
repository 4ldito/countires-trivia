import React from 'react'
import Login from './../User/Login'
import UserInfo from './UserInfo'

const Navbar = ({ handleTheme, theme, user, isLoading }) => {
  return (
    <nav className='w-full h-24 top-0 transition-colors bg-neutral-50 dark:text-white dark:bg-dark-900 '>
      <ul className='flex h-full px-12 items-center justify-between'>
        <li>
          <button onClick={handleTheme}>{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</button>
        </li>
        <li>{!isLoading && (user ? <UserInfo user={user} /> : <Login />)}</li>
      </ul>
    </nav>
  )
}

export default Navbar
