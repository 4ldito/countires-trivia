import axios from 'axios'

export const setSelectedAnswer = async (id, game) => {
  const { data } = await axios.post('game/answer', { id, game })
  return data
}
