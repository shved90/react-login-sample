import type { ReactNode } from 'react'
import { useContext, createContext, useReducer } from "react"


type State = { lang: string }

const LangContext = createContext<
    { state: State, dispatchLang: any } | undefined
>(undefined)

const langReducer = (state: State, action: any) => {
    return { lang: action.lang }
}

export const LangProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatchLang] = useReducer(langReducer, { lang: 'en' })
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
