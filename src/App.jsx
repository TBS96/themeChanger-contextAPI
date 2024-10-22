import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'

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
        <div>
          <ThemeBtn />
        </div>

        <div>
          {/* <Card /> */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App