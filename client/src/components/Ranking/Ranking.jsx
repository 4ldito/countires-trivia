import React from 'react'
import Button from '../Buttons/Button'

const Ranking = ({ setRender }) => {
  return (
    <section>
      <Button text='Back' onClick={() => setRender('home')} />
      <h2>Ranking</h2>
    </section>
  )
}

export default Ranking
