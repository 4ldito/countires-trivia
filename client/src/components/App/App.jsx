import useDarkMode from './../../hooks/useDarkMode'
import { useAuth0 } from '@auth0/auth0-react'

import Home from './../Home/Home'
import Navbar from '../Navbar/Navbar'
import HomeWithoutLogin from '../Home/HomeWithoutLogin'
import Loading from './../Loading/Loading'

function App () {
  const { handleTheme, actualTheme } = useDarkMode()
  const { user, isAuthenticated, logout, isLoading } = useAuth0()

  const getRender = () => {
    if (isLoading) return <Loading />

    if (isAuthenticated) return <Home user={user} logout={logout} />

    return <HomeWithoutLogin />
  }

  return (
    <>
      <Navbar handleTheme={handleTheme} theme={actualTheme} user={user} isLoading={isLoading} />
      <div className='height-without-navbar text-2xl dark:text-white flex items-center flex-col justify-evenly bg-slate-200 dark:bg-dark-800'>
        <h1 className='dark text-5xl'>World Trivia</h1>
        <main className='mx-4 min-w-full'>
          <div className='max-w-4xl mx-auto full-container-height p-10 rounded-lg transition-colors bg-neutral-50 dark:bg-dark-900'>
            {getRender()}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
