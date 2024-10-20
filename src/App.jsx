import React from 'react'
import { ThemeProvider } from './contexts/Theme'

const App = () => {
  return (
    <ThemeProvider value={{themeMode, lighttheme, darktheme,}}>
      <div className='grid place-items-center w-full h-screen'>
        Hello
      </div>
    </ThemeProvider>
  )
}

export default App