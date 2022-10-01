
const Button = ({ text, onClick, color }) => {
  let colors = 'bg-emerald-200 hover:bg-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700'

  if (color === 'secondary') {
    colors = 'bg-sky-100 hover:bg-sky-200 dark:bg-sky-500 dark:hover:bg-sky-600'
  }
  return (
    <button className={`px-6 py-2 text-xl transition-colors rounded-md inline ${colors}`} onClick={onClick}>{text}</button>
  )
}

export default Button
