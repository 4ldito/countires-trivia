
const ButtonQuestion = ({ children, onClick, className }) => {
  return (
    <button className={`px-4 py-2 text-xl transition-colors text-white inline rounded-full bg-sky-600 hover:bg-sky-700 ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonQuestion
