import React from 'react'
import Button from '../Buttons/Button'

const Ranking = ({ setRender }) => {
  return (
    <section>
      <Button onClick={() => setRender('home')}>Back</Button>
      <h2>Ranking</h2>
    </section>
  )
}

export default Ranking
