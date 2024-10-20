import { createContext, useContext } from "react";


// create context
export const ThemeContext = createContext({
    themeMode: 'light',
    darktheme: () => {},
    lighttheme: () => {}
})

// provide context
export const ThemeProvider = ThemeContext.Provider

// use the created context(as custom hooks, here)
export default useTheme = () => {
    return useContext(ThemeContext)
}