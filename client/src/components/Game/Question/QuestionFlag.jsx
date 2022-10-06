import { useEffect, useState } from 'react'

import ButtonQuestion from '../../Buttons/ButtonQuestion'
import Loading from './../../Loading/Loading'
import { setSelectedAnswer } from '../../../controllers/questionAnswer'

let interval

const QuestionFlag = ({ question, game, setGame }) => {
  const [timer, setTimer] = useState(10)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [alreadyAnswered, setAlreadyAnswered] = useState(false)

  const handleAnswer = (id) => {
    setAlreadyAnswered(true)
    setSelectedAnswer(id, game).then((answer) => {
      console.log(answer)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    if (timer <= 0) clearInterval(interval)
  }, [timer])

  useEffect(() => {
    if (isImageLoaded) {
      interval = setInterval(() => {
        setTimer(state => --state)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isImageLoaded])

  return (
    <>
      <article className='flex flex-col gap-8 items-center'>
        <p className={`text-red-600 ${timer > 5 && 'text-green-500'}`}>{timer > 0 ? timer : 0}</p>
        <picture>
          <img onLoad={() => setIsImageLoaded(true)} className='w-full h-40 object-contain rounded-md select-none' src={question.body.flag} alt='' />
        </picture>
        {timer > 0
          ? (
            <>
              <p>This flags belongs to..</p>
              <div className='grid grid-cols-2 gap-12'>
                {question.countries.map(country => {
                  return <ButtonQuestion disabled={alreadyAnswered} onClick={() => handleAnswer(country.id)} key={country.id}>{country.name}</ButtonQuestion>
                })}
              </div>
            </>
            )
          : (
            <div>
              <span className='text-red-600'>Times up!</span>
            </div>
            )}
      </article>
      {!isImageLoaded && <Loading />}
    </>
  )
}

export default QuestionFlag
