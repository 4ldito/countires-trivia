import { BsMoonFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'

import Login from './../User/Login'
import UserInfo from './UserInfo'

const Navbar = ({ handleTheme, theme, user, isLoading }) => {
  return (
    <nav className='w-full h-24 top-0 transition-colors bg-neutral-50 dark:text-white dark:bg-dark-900 '>
      <ul className='flex h-full px-12 items-center justify-between'>
        <li>
          <button onClick={handleTheme}>{theme === 'dark' ? <FiSun size='2.3em' /> : <BsMoonFill size='2.3em' />}</button>
        </li>
        <li>{!isLoading && (user ? <UserInfo user={user} /> : <Login />)}</li>
      </ul>
    </nav>
  )
}

export default Navbar
