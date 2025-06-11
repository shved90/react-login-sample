import { createContext, useContext, useReducer, useMemo, useEffect, Dispatch, ReactNode } from 'react'

type Theme = 'light' | 'dark'
type State = { theme: Theme }
type Action = { type: 'TOGGLE_THEME' } | { type: 'SET_THEME'; payload: Theme }

const ThemeContext = createContext<
    { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined)

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { theme: state.theme === 'light' ? 'dark' : 'light' }
        case 'SET_THEME':
            return { theme: action.payload }
        default:
            return state
    }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const getInitialTheme = (): Theme =>
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'

    const [state, dispatch] = useReducer(reducer, { theme: getInitialTheme() })

    useEffect(() => {
        const isDark = state.theme === 'dark'
        document.body.classList.toggle('dark', isDark)
        if (isDark) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.removeItem('theme')
        }
    }, [state.theme])

    const value = useMemo(() => ({ state, dispatch }), [state])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used inside a ThemeProvider')
    return context
}
