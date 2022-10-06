
const ButtonQuestion = ({ children, onClick, className, disabled }) => {
  return (
    <button disabled={disabled} className={`px-4 py-2 text-xl transition-colors text-white inline rounded-full bg-sky-600 hover:bg-sky-700 ${className || ''} ${disabled && 'cursor-not-allowed'}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonQuestion
