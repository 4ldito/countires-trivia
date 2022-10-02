import { useRef } from 'react'

import { FiSettings } from 'react-icons/fi'
import Button from '../Buttons/Button'

const Options = ({ setRender }) => {
  const refMenu = useRef(null)

  return (
    <div className='absolute left-0 top-0'>
      <button className=' transition-colors hover:text-dark-500 dark:hover:text-gray-300' onClick={() => refMenu.current.classList.toggle('hidden')}>
        <FiSettings />
      </button>
      <div ref={refMenu} className='hidden absolute'>
        <Button onClick={() => setRender('home')}>Back</Button>
      </div>
    </div>
  )
}

export default Options
