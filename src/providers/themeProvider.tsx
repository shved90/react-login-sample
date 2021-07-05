import type { ReactNode } from 'react'
import { useContext, createContext, useReducer } from "react"

const defaultTheme = { theme: false }

export type Dispatch = (action: 'SET_THEME') => void
export type State = typeof defaultTheme

const ThemeContext = createContext<
    { state: State, dispatch: any } | undefined
>(undefined)

function themeReducer(state: State, action: 'SET_THEME') {
    return { theme: state.theme }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(themeReducer, defaultTheme)
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) throw new Error('useTheme must be used inside a ThemeProvider')

    return context
}
