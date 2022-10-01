import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [actualTheme, setActualTheme] = useState()

  const handleTheme = () => {
    if (actualTheme === 'dark') return setActualTheme('light')
    setActualTheme('dark')
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme) return setActualTheme(theme)

    setActualTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (actualTheme) {
      const oldTheme = actualTheme === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.remove(oldTheme)
      document.documentElement.classList.add(actualTheme)
      window.localStorage.setItem('theme', actualTheme)
    }
  }, [actualTheme])

  return { handleTheme, actualTheme }
}

export default useDarkMode
