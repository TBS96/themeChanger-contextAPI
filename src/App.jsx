import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card';

const App = () => {

  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='grid place-items-center w-full h-screen'>
        <div className='w-full max-w-sm mx-auto flex justify-end'>
          <ThemeBtn />
        </div>

        <div className='w-full max-w-sm mx-auto'>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App