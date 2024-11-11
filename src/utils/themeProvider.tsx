import type { ReactNode, Dispatch } from 'react'
import { useContext, createContext, useReducer, useMemo } from "react"

const defaultTheme = { theme: 'light' }

export type State = typeof defaultTheme

const ThemeContext = createContext<
    { state: State, dispatchTheme: Dispatch<State> } | undefined
>(undefined)

const themeReducer = (state: State) => {
    return { theme: state.theme }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatchTheme] = useReducer(themeReducer, defaultTheme)

    const themeValue = useMemo(() => ({
        state, dispatchTheme
    }), [state]);

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used inside a ThemeProvider')
    return context
}
