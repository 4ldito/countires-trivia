import axios from 'axios'
import { useEffect, useState } from 'react'

const useNewGame = (user) => {
  const [game, setGame] = useState()
  useEffect(() => {
    const asyncFunction = async () => {
      const { data } = await axios(`game/new-game?user=${user.nickname}`)
      setGame(data)
    }
    asyncFunction()
  }, [])
  return { game }
}

export default useNewGame
