import type { ReactNode } from 'react'
import { useContext, createContext, useReducer } from "react"

const defaultTheme = { theme: false }

export type Dispatch = (action: 'SET_THEME') => void
export type State = typeof defaultTheme

const ThemeContext = createContext<
    { state: State, dispatchTheme: any } | undefined
>(undefined)

const themeReducer = (state: State, action: 'SET_THEME') => {
    return { theme: state.theme }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatchTheme] = useReducer(themeReducer, defaultTheme)
    return (
        <ThemeContext.Provider value={{ state, dispatchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used inside a ThemeProvider')
    return context
}
