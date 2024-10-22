import { createContext, useContext } from "react";


// create context
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
})

// provide context
export const ThemeProvider = ThemeContext.Provider

// use the created context(as custom hooks, here)
export default function useTheme() {
    return useContext(ThemeContext)
}