import axios from 'axios'
import { useEffect, useState } from 'react'

const useNewGame = (user) => {
  const [game, setGame] = useState()
  const [isGameLoading, setIsGameLoading] = useState(true)

  useEffect(() => {
    const asyncFunction = async () => {
      const { data } = await axios(`game/new-game?user=${user.nickname}`)
      setGame(data)
    }
    asyncFunction()
  }, [])

  useEffect(() => {
    if (game) setIsGameLoading(false)
  }, [game])

  return { game, isGameLoading, setGame }
}

export default useNewGame
