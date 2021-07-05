import type { ReactNode } from 'react'
import { useContext, createContext, useReducer } from "react"

const defaultLang = { 
    lang: 'eng'
}

export type Dispatch = (action: 'SET_LANG') => void
export type State = typeof defaultLang

const LangContext = createContext<
    { state: State, dispatch: any } | undefined
>(undefined)

function langReducer(state: State, action: 'SET_LANG') {
    return { lang: state.lang }
}

export function LangProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(langReducer, defaultLang)
    return (
        <LangContext.Provider value={{ state, dispatch }}>
            {children}
        </LangContext.Provider>
    )
}

export function useLang() {
    const context = useContext(LangContext)

    if (!context) throw new Error('useLang must be used inside a LangProvider')

    return context
}
