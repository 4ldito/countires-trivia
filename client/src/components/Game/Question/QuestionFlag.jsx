
const QuestionFlag = ({ question }) => {
  console.log(question)
  return (
    <article className='flex flex-col gap-8 items-center'>
      <picture>
        <img className='w-full h-40 object-contain' src={question.body.flag} alt='' />
      </picture>
      <p>This flags belongs to..</p>

    </article>
  )
}

export default QuestionFlag
