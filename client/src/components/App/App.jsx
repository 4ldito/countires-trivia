import { useState } from 'react'
import useDarkMode from './../../hooks/useDarkMode'
import { useAuth0 } from '@auth0/auth0-react'

import Home from './../Home/Home'
import Navbar from '../Navbar/Navbar'
import HomeWithoutLogin from '../Home/HomeWithoutLogin'
import Loading from './../Loading/Loading'
import Ranking from '../Ranking/Ranking'
import Game from '../Game/Game'

function App () {
  const [render, setRender] = useState('home')
  const { handleTheme, actualTheme } = useDarkMode()
  const { user, isAuthenticated, logout, isLoading } = useAuth0()

  const getRender = () => {
    if (isLoading) return <Loading />

    if (isAuthenticated) {
      if (render === 'home') return <Home setRender={setRender} user={user} logout={logout} />
    }

    if (render === 'ranking') return <Ranking setRender={setRender} user={user} />
    else if (render === 'game') return <Game setRender={setRender} user={user} />

    return <HomeWithoutLogin setRender={setRender} />
  }

  return (
    <>
      <Navbar handleTheme={handleTheme} theme={actualTheme} user={user} isLoading={isLoading} />
      <div className='height-without-navbar text-2xl dark:text-white flex items-center flex-col justify-evenly bg-gradient-to-r from-slate-200 to-slate-100 dark:from-dark-800 dark:to-dark-700'>
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
