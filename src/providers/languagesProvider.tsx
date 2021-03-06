import type { ReactNode } from 'react'
import { useContext, createContext, useReducer } from "react"

const defaultLang = { lang: 'eng' }

export type Dispatch = (action: 'SET_LANG') => void
export type State = typeof defaultLang

const LangContext = createContext<
    { state: State, dispatchLang: any } | undefined
>(undefined)

const langReducer = (state: State, action: 'SET_LANG') => {
    return { lang: state.lang }
}

export const LangProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatchLang] = useReducer(langReducer, defaultLang)
    return (
        <LangContext.Provider value={{ state, dispatchLang }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => {
    const context = useContext(LangContext)
    if (!context) throw new Error('useLang must be used inside a LangProvider')
    return context
}
